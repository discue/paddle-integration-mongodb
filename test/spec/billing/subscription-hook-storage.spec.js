import { SimpleResourceStorage as SimpleStorage } from '@discue/mongodb-resource-client'
import { expect } from 'chai'
import { randomUUID as uuid } from 'node:crypto'
import EventStorage from '../../../lib/billing/event-log-storage.js'
import SubscriptionStorage from '../../../lib/billing/subscription-hook-storage.js'
import subscriptionCancelled from '../../billing-fixtues/subscription-canceled.js'
import subscriptionCreated from '../../billing-fixtues/subscription-created.js'
import mongoClient from "../mongodb-client.js"

const client = mongoClient()

const eventStorageBackend = new SimpleStorage({ collectionName: '_events', client })
const eventStorage = new EventStorage({ storage: eventStorageBackend })

const subscriptionStorageBackend = new SimpleStorage({ collectionName: '_subscriptions', client })
const subscriptionStorage = new SubscriptionStorage({ storage: subscriptionStorageBackend, eventStorage })

const historyStorageBackend = new SimpleStorage({ collectionName: '_subscriptions_history', client })

describe('SubscriptionHook Billing API', () => {
    const allIds = []

    let nextId

    beforeEach(() => {
        nextId = `sub_${uuid()}`
        allIds.push(nextId)
    })

    afterEach(async () => {
        await subscriptionStorageBackend.delete(nextId)
    })

    after(async () => {
        await subscriptionStorageBackend.close()
        await eventStorageBackend.close()
        await historyStorageBackend.close()
    })

    after(async () => {
        await client.close()
    })


    it('creates a new subscription', async () => {
        const subscription = subscriptionCreated()
        subscription.data.id = nextId
        await subscriptionStorage.store(subscription)

        const subscriptions = await subscriptionStorageBackend.getAll()
        expect(subscriptions).to.have.length(1)
        expect(subscriptions.at(0).id).to.match(/^sub_/)
        expect(subscriptions.at(0).id).to.equal(subscription.data.id)
        expect(subscriptions.at(0).status).to.equal('active')
    })

    it('creates a hook log entry', async () => {
        const keysToCompare = ['event_id', 'event_type', 'notification_id', 'occurred_at', 'target_id']

        const subscription = subscriptionCreated()
        subscription.data.id = nextId
        await subscriptionStorage.store(subscription)

        const events = await eventStorageBackend.getAll()
        const hasOneExpectedEvent = events.some((event) => {
            return keysToCompare.every((key) => {
                if (key === 'target_id') {
                    return true
                }
                return event[key] === subscription[key]
            })
        })

        expect(hasOneExpectedEvent).to.equal(true)
    })

    it('updates a subscription', async () => {
        const subscriptionCreatedData = subscriptionCreated()
        subscriptionCreatedData.data.id = nextId
        await subscriptionStorage.store(subscriptionCreatedData)

        const subscription = subscriptionCancelled()
        subscription.data.id = nextId
        await subscriptionStorage.store(subscription)

        const subscriptions = await subscriptionStorageBackend.getAll()
        expect(subscriptions).to.have.length(1)
        expect(subscriptions.at(0).id).to.match(/^sub_/)
        expect(subscriptions.at(0).id).to.equal(subscription.data.id)
        expect(subscriptions.at(0).status).to.equal('canceled')
    })

    it('adds entries to history table', async () => {
        const subscriptionCreatedData = subscriptionCreated()
        subscriptionCreatedData.data.id = nextId
        await subscriptionStorage.store(subscriptionCreatedData)
        await new Promise((resolve) => setTimeout(resolve, 250))

        const history = await historyStorageBackend.getAll()
        console.log(JSON.stringify(history, null, 2))
        history.forEach(h => console.log('sub', h.id))
        // console.log(JSON.stringify(history, null, 2))
        expect(history).to.have.length(allIds.length)
    })
})