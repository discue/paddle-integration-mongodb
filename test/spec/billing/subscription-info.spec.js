import { SimpleResourceStorage as SimpleStorage } from '@discue/mongodb-resource-client'
import { expect } from 'chai'
import { randomUUID as uuid } from 'node:crypto'
import EventStorage from '../../../lib/billing/event-log-storage.js'
import SubscriptionStorage from '../../../lib/billing/subscription-hook-storage.js'
import SubscriptionInfoStorage from '../../../lib/billing/subscription-info.js'
import subscriptionCreated from '../../billing-fixtues/subscription-created.js'
import mongoClient from "../mongodb-client.js"

const client = mongoClient()

const eventStorageBackend = new SimpleStorage({ collectionName: '_events', client })
const eventStorage = new EventStorage({ storage: eventStorageBackend })

const subscriptionStorageBackend = new SimpleStorage({ collectionName: '_subscriptions', client })
const subscriptionStorage = new SubscriptionStorage({ storage: subscriptionStorageBackend, eventStorage })

const subscriptionInfoBackend = new SimpleStorage({ collectionName: '_subscriptions', client })
const subscriptionInfo = new SubscriptionInfoStorage({ storage: subscriptionInfoBackend, eventStorage })

describe('SubscriptionHook Billing API', () => {

    let nextId

    beforeEach(() => {
        nextId = `sub_${uuid()}`
    })

    afterEach(async () => {
        await subscriptionStorageBackend.delete(nextId)
    })

    after(async () => {
        await subscriptionStorageBackend.close()
        await eventStorageBackend.close()
        await subscriptionInfoBackend.close()
    })

    after(async () => {
        return client.close()
    })

    describe('.getSubscriptionsByCustomData', () => {
        it('returns a subscription by customData', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            await subscriptionStorage.store(subscription)

            const subs = await subscriptionInfo.getSubscriptionsByCustomData({
                ids: ["77693b60-e2b5-404b-a7f0-51d4dda7284a"]
            })

            expect(subs).to.have.length(1)
            expect(subs.at(0).id).to.equal(nextId)
        })

        it('returns null if no subscription was found', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            await subscriptionStorage.store(subscription)

            const info = await subscriptionInfo.getSubscriptionsByCustomData({ ids: [123] })
            expect(info).to.have.length(0)
        })
    })

    describe('.getStatusTrailByCustomData', () => {
        it('returns a history', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            await subscriptionStorage.store(subscription)
            await new Promise((resolve) => setTimeout(resolve, 200))

            const subs = await subscriptionInfo.getStatusTrailByCustomData({
                ids: ["77693b60-e2b5-404b-a7f0-51d4dda7284a"]
            })

            expect(subs).to.have.length(1)
            expect(subs.at(0).action).to.equal('create')
        })

        it('returns null if no subscription was found', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            await subscriptionStorage.store(subscription)

            const info = await subscriptionInfo.getSubscriptionsByCustomData({ ids: [123] })
            expect(info).to.have.length(0)
        })
    })

    describe('.getActiveProductsByCustomData', () => {
        it('returns empty list if no products active', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            await subscriptionStorage.store(subscription)

            const info = await subscriptionInfo.getActiveProductsByCustomData({
                ids: ["123"]
            })
            expect(Object.keys(info)).to.have.length(0)
        })

        it('returns empty list if sub status is canceled', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            subscription.data.status = 'canceled'
            await subscriptionStorage.store(subscription)

            const info = await subscriptionInfo.getActiveProductsByCustomData({
                ids: ["77693b60-e2b5-404b-a7f0-51d4dda7284a"]
            })
            expect(Object.keys(info)).to.have.length(0)
        })

        it('returns empty list if sub status is paused', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            subscription.data.status = 'paused'
            await subscriptionStorage.store(subscription)

            const info = await subscriptionInfo.getActiveProductsByCustomData({
                ids: ["77693b60-e2b5-404b-a7f0-51d4dda7284a"]
            })
            expect(Object.keys(info)).to.have.length(0)
        })

        it('returns active products if sub status is active', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            await subscriptionStorage.store(subscription)

            const subs = await subscriptionInfo.getActiveProductsByCustomData({
                ids: ["77693b60-e2b5-404b-a7f0-51d4dda7284a"]
            })

            expect(subs).to.have.keys(subscription.data.id)
            const products = subs[subscription.data.id]

            expect(products).to.have.length(2)
            expect(products).to.include('pro_01gsz4t5hdjse780zja8vvr7jg')
            expect(products).to.include('pro_01h1vjes1y163xfj1rh1tkfb65')
        })

        it('returns active products if sub status is trialing', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            subscription.data.status = 'trialing'
            await subscriptionStorage.store(subscription)

            const subs = await subscriptionInfo.getActiveProductsByCustomData({
                ids: ["77693b60-e2b5-404b-a7f0-51d4dda7284a"]
            })

            expect(subs).to.have.keys(subscription.data.id)
            const products = subs[subscription.data.id]

            expect(products).to.have.length(2)
            expect(products).to.include('pro_01gsz4t5hdjse780zja8vvr7jg')
            expect(products).to.include('pro_01h1vjes1y163xfj1rh1tkfb65')
        })

        it('returns active products if sub status is past_due', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            subscription.data.status = 'past_due'
            await subscriptionStorage.store(subscription)

            const subs = await subscriptionInfo.getActiveProductsByCustomData({
                ids: ["77693b60-e2b5-404b-a7f0-51d4dda7284a"]
            })

            expect(subs).to.have.keys(subscription.data.id)
            const products = subs[subscription.data.id]

            expect(products).to.have.length(2)
            expect(products).to.include('pro_01gsz4t5hdjse780zja8vvr7jg')
            expect(products).to.include('pro_01h1vjes1y163xfj1rh1tkfb65')
        })

        it('does not return inactive products', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            subscription.data.items[0].status = 'inactive'
            await subscriptionStorage.store(subscription)

            const subs = await subscriptionInfo.getActiveProductsByCustomData({
                ids: ["77693b60-e2b5-404b-a7f0-51d4dda7284a"]
            })

            expect(subs).to.have.keys(subscription.data.id)
            const products = subs[subscription.data.id]

            expect(products).to.have.length(1)
            expect(products).to.include('pro_01h1vjes1y163xfj1rh1tkfb65')
        })

        it('does not return products with status trialing', async () => {
            const subscription = subscriptionCreated()
            subscription.data.id = nextId
            subscription.data.items[0].status = 'trialing'
            await subscriptionStorage.store(subscription)

            const subs = await subscriptionInfo.getActiveProductsByCustomData({
                ids: ["77693b60-e2b5-404b-a7f0-51d4dda7284a"]
            })

            expect(subs).to.have.keys(subscription.data.id)
            const products = subs[subscription.data.id]

            expect(products).to.have.length(2)
            expect(products).to.include('pro_01gsz4t5hdjse780zja8vvr7jg')
            expect(products).to.include('pro_01h1vjes1y163xfj1rh1tkfb65')
        })
    })
})