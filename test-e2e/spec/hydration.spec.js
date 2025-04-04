'use strict'

import { expect, test } from '@playwright/test'
import { randomUUID } from 'crypto'
import { Api, SubscriptionHooks, SubscriptionHydration, SubscriptionInfo, subscriptionStorage } from '../../lib/index.js'
import mongodbClient from '../../test/spec/mongodb-client.js'
import catchAndRetry from './catch-and-retry.js'

const client = mongodbClient(27017)
const storage = subscriptionStorage({ client })
const subscriptions = new SubscriptionHooks({ storage })

let subscriptionInfo
let subscriptionHydration
let apiClientId
/**
 * @type {import('../../lib/paddle/api.js')}
 */
let api

test.beforeAll(async () => {
    api = new Api({ logRequests: true, useSandbox: true, authCode: process.env.AUTH_CODE, vendorId: process.env.VENDOR_ID })
    subscriptionInfo = new SubscriptionInfo({ api, storage })
    subscriptionHydration = new SubscriptionHydration({ api, hookStorage: subscriptions, subscriptionInfo })
})

test.beforeEach(async () => {
    apiClientId = randomUUID()
    await subscriptions.addSubscriptionPlaceholder([apiClientId])
})

async function createNewSubscription(page, apiClientId) {
    setTimeout(async () => {
        const nextYear = new Date().getFullYear() + 1
        await page.goto(`http://localhost:3333/checkout.html?clientId=${apiClientId}`)
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="postcodeInput"]').click()
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="postcodeInput"]').fill('12345')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="postcodeInput"]').press('Enter')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardNumberInput"]').click()
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardNumberInput"]').fill('4242424242424242')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardNumberInput"]').press('Tab')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardholderNameInput"]').fill('Muller')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardholderNameInput"]').press('Tab')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="expiryDateField"]').fill(`12/${nextYear}`)
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="expiryDateField"]').press('Tab')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardVerificationValueInput"]').fill('123')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardVerificationValueInput"]').press('Enter')
    }, 1000)

    return new Promise((resolve) => {
        page.exposeFunction('testCallback', resolve)
    })
}

test('hydrate an active subscription', async ({ page }) => {
    // create new subscription and ...
    const result = await createNewSubscription(page, apiClientId)
    const { order } = result
    const { subscription_id: subscriptionId } = order

    let subscription = await storage.get([apiClientId])

    // remove status and payments to verify hydration process
    await storage.update([apiClientId], {
        $set: {
            'status': [],
            'payments': []
        }
    })

    subscription = await storage.get([apiClientId])
    // .. expect sub to be not active anymore after we reset all status and payments
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeFalsy()

    // .. now hydrate status again ..
    await subscriptionHydration.hydrateSubscriptionCreated([apiClientId], { subscription_id: subscriptionId }, 'checkoutId')

    // .. and expect subscription to be active again
    subscription = await storage.get([apiClientId])
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()
})

test('hydrates the initial payment too', async ({ page }) => {
    // create new subscription and ...
    const result = await createNewSubscription(page, apiClientId)
    const { order } = result
    const { subscription_id: subscriptionId } = order

    let subscription = await storage.get([apiClientId])

    // remove status and payments to verify hydration process
    await storage.update([apiClientId], {
        $set: {
            'status': [],
            'payments': []
        }
    })

    subscription = await storage.get([apiClientId])
    await catchAndRetry(async () => {
        // .. expect sub to be not active anymore after we reset all status and payments
        let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
        expect(sub['52450']).toBeFalsy()
    })

    // .. now hydrate status again ..
    await subscriptionHydration.hydrateSubscriptionCreated([apiClientId], { subscription_id: subscriptionId }, 'checkoutId')

    // .. and expect subscription to be active again
    subscription = await storage.get([apiClientId])

    const payments = subscription.payments
    const payment = payments.at(0)

    expect(payment.alert_id).toEqual(SubscriptionHydration.HYDRATION_SUBSCRIPTION_CREATED)
    expect(payment.alert_name).toEqual(SubscriptionHydration.HYDRATION_SUBSCRIPTION_CREATED)
    expect(payment.checkout_id).toEqual('checkoutId')
    expect(payment.currency).toEqual(result.order.currency)
    expect(payment.email).toEqual(result.order.customer.email)
    expect(new Date(payment.event_time).getTime()).toBeGreaterThanOrEqual(new Date(new Date().getTime() - 1000 * 60 * 60 * 5).getTime())
    expect(payment.initial_payment).toEqual('1')
    expect(payment.instalments).toEqual('1')
    expect(new Date(payment.next_bill_date).getTime()).toBeGreaterThan(new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 27).getTime()) // 27 days because of february having 28 days
    expect(payment.passthrough).toContain(apiClientId)
    expect(parseFloat(payment.next_payment_amount)).toEqual(parseFloat(result.order.total))
    expect(payment.payment_method).toEqual('card')
    {
        // strip the hash value 3834651 from url
        // https://sandbox-my.paddle.com/receipt/525486-3834651/1192015-chrea38c44d0069-2b66b730c9
        const url = payment.receipt_url
        const indexOfSecondHyphen = url.indexOf('-', url.indexOf('receipt'))
        const indexOfSlashAfterHypen = url.indexOf('/', indexOfSecondHyphen)
        const urlWithoutHash = url.substring(0, indexOfSecondHyphen) + url.substring(indexOfSlashAfterHypen)
        expect(urlWithoutHash).toEqual(result.order.receipt_url)
    }
    expect(payment.sale_gross).toEqual(result.order.total)
    expect(payment.status).toEqual('active')
    expect(payment.subscription_id).toEqual(result.order.subscription_id)
    expect(payment.subscription_plan_id).toEqual(result.order.product_id)

    const remoteSubscriptions = await api.getSubscription({ subscription_id: subscriptionId })
    expect(payment.user_id).toEqual(remoteSubscriptions.at(0).user_id)
    expect(payment.marketing_consent).toEqual(remoteSubscriptions.at(0).marketing_consent)
})

test('provides enough data for a hydrated status to look like a real one', async ({ page }) => {
    // create new subscription and ...
    const result = await createNewSubscription(page, apiClientId)
    const { order } = result
    const { subscription_id: subscriptionId } = order

    let subscription = await storage.get([apiClientId])

    // remove status and payments to verify hydration process
    await storage.update([apiClientId], {
        $set: {
            'status': [],
            'payments': []
        }
    })

    await catchAndRetry(async () => {
        subscription = await storage.get([apiClientId])
        // .. expect sub to be not active anymore after we reset all status and payments
        let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
        expect(sub['52450']).toBeFalsy()

    })

    // .. now hydrate status again ..
    await subscriptionHydration.hydrateSubscriptionCreated([apiClientId], { subscription_id: subscriptionId }, 'checkoutId')

    // .. and expect subscription to be active again
    const subInfo = await subscriptionInfo.getSubscriptionInfo([apiClientId])
    const { status_trail: statusTrail } = subInfo['52450']
    const status = statusTrail.at(0)

    expect(status.cancel_url.startsWith('https')).toBeTruthy
    expect(status.update_url.startsWith('https')).toBeTruthy
})

test('provides enough data for a hydrated payment to look like a real one', async ({ page }) => {
    // create new subscription and ...
    const result = await createNewSubscription(page, apiClientId)
    const { order } = result
    const { subscription_id: subscriptionId } = order

    let subscription = await storage.get([apiClientId])

    // remove status and payments to verify hydration process
    await storage.update([apiClientId], {
        $set: {
            'status': [],
            'payments': []
        }
    })

    subscription = await storage.get([apiClientId])
    // .. expect sub to be not active anymore after we reset all status and payments
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeFalsy()

    // .. now hydrate status again ..
    await subscriptionHydration.hydrateSubscriptionCreated([apiClientId], { subscription_id: subscriptionId }, 'checkoutId')

    await catchAndRetry(async () => {
        // .. and expect subscription to be active again
        const subInfo = await subscriptionInfo.getSubscriptionInfo([apiClientId])
        const { payments_trail: paymentsTrail } = subInfo['52450']

        expect(paymentsTrail).toHaveLength(1)
    })

    const subInfo = await subscriptionInfo.getSubscriptionInfo([apiClientId])
    const { payments_trail: paymentsTrail } = subInfo['52450']
    const payment = paymentsTrail.at(0)

    expect(payment.description).toEqual(SubscriptionHydration.HYDRATION_SUBSCRIPTION_CREATED)
    expect(payment.checkout_id).toBeUndefined()
    expect(payment.amount.currency).toEqual(result.order.currency)
    expect(payment.amount.total).toEqual(result.order.total)
    expect(payment.amount.unit_price).toBeUndefined()
    expect(payment.subscription_plan_id).toEqual(result.order.product_id)
    expect(payment.next_payment.date).not.toBeUndefined()
    expect(payment.amount.currency).toEqual(result.order.currency)
    expect(payment.amount.total).toEqual(result.order.total)
    {
        // strip the hash value 3834651 from url
        // https://sandbox-my.paddle.com/receipt/525486-3834651/1192015-chrea38c44d0069-2b66b730c9
        const url = payment.receipt_url
        const indexOfSecondHyphen = url.indexOf('-', url.indexOf('receipt'))
        const indexOfSlashAfterHypen = url.indexOf('/', indexOfSecondHyphen)
        const urlWithoutHash = url.substring(0, indexOfSecondHyphen) + url.substring(indexOfSlashAfterHypen)
        expect(urlWithoutHash).toEqual(result.order.receipt_url)
    }
    expect(payment.instalments).toEqual('1')
})

test('throws if subscription was created for another client', async ({ page }) => {
    // create new subscription and ...
    const result = await createNewSubscription(page, apiClientId)
    const { order } = result
    const { subscription_id: subscriptionId } = order

    let subscription = await storage.get([apiClientId])

    // remove status and payments to verify hydration process
    await storage.update([apiClientId], {
        $set: {
            'status': [],
            'payments': []
        }
    })

    await catchAndRetry(async () => {
        subscription = await storage.get([apiClientId])
        // .. expect sub to be not active anymore after we reset all status and payments
        let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
        expect(sub['52450']).toBeFalsy()
    })

    try {
        // add dummy client here
        await storage.create(['123'], {
            subscription: {
                status: []
            }
        })
        await subscriptionHydration.hydrateSubscriptionCreated(['123'], { subscription_id: subscriptionId }, 'checkoutId')
        throw new Error('Must throw')
    } catch (e) {
        const message = e.message
        expect(message).toEqual(SubscriptionInfo.HYDRATION_UNAUTHORIZED)
    }
})

test('does not hydrate if status created was already received', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page, apiClientId)

    await catchAndRetry(async () => {
        const subscription = await storage.get([apiClientId])

        // .. and check subscription is active to make sure setup was correct
        let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
        expect(sub['52450']).toBeTruthy()
    })

    const subscription = await storage.get([apiClientId])
    const subscriptionId = subscription.status[0].subscription_id

    // .. now hydrate status again ..
    await subscriptionHydration.hydrateSubscriptionCreated([apiClientId], { subscription_id: subscriptionId }, 'checkoutId')

    await catchAndRetry(async () => {
        // .. and expect subscription to be active again
        const subscription = await storage.get([apiClientId])
        expect(subscription.status).toHaveLength(1)
    })
})

test('hydrate a deleted subscription', async ({ page }) => {
    // create new subscription and ...
    const result = await createNewSubscription(page, apiClientId)
    const { order } = result

    let subscription = await storage.get([apiClientId])

    try {
        await api.cancelSubscription(order)
        await new Promise((resolve) => setTimeout(resolve, 10000))
    } catch (e) {
        if (e.message !== SubscriptionInfo.ERROR_SUBSCRIPTION_ALREADY_CANCELLED) {
            throw e
        }
    }

    // .. now hydrate status again ..
    await subscriptionHydration.hydrateSubscriptionCancelled([apiClientId], '52450')


    await catchAndRetry(async () => {
        subscription = await storage.get([apiClientId])
        const sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription, new Date(new Date().getTime() + 1000 * 3600 * 24 * 35))
        expect(sub['52450']).toBeFalsy()
    })

    subscription = await storage.get([apiClientId])

    const { status: subscriptionStatus } = subscription
    expect(subscriptionStatus).toHaveLength(3)

    const subscriptionsFromApi = await api.getSubscription(subscription.status.at(-1))
    const subscriptionFromApi = subscriptionsFromApi.at(0)

    const status = subscriptionStatus.at(-1)

    expect(status.alert_id).toEqual(SubscriptionInfo.HYDRATION_SUBSCRIPTION_CANCELLED)
    expect(status.alert_name).toEqual(SubscriptionInfo.HYDRATION_SUBSCRIPTION_CANCELLED)
    expect(status.currency).toEqual(subscriptionFromApi.last_payment.currency)
    expect(status.description).toEqual('deleted')
    expect(status.next_bill_date).toBeUndefined()
    expect(status.update_url).toBeUndefined()
    expect(status.subscription_id).toEqual(subscriptionFromApi.subscription_id)
    expect(status.subscription_plan_id).toEqual(subscriptionFromApi.plan_id)
    expect(status.cancel_url).toBeUndefined()
    expect(status.vendor_user_id).toEqual(subscriptionFromApi.user_id)

    const signUpDate = new Date(subscriptionFromApi.signup_date)
    const expectedEndDate = new Date(signUpDate.getTime() + 33 * 3600 * 1000 * 24)

    for (let i = 0; i < 33 && expectedEndDate.getDate() !== signUpDate.getDate(); i++) {
        expectedEndDate.setTime(expectedEndDate.getTime() - 1000 * 60 * 60 * 24)
    }

    expectedEndDate.setTime(expectedEndDate.getTime() - 1000 * 60 * 60 * 24)

    expectedEndDate.setUTCHours(12)
    expectedEndDate.setUTCMinutes(0)
    expectedEndDate.setUTCSeconds(0)
    expectedEndDate.setUTCMilliseconds(0)

    expect(new Date(status.cancellation_effective_date).toISOString()).toEqual(expectedEndDate.toISOString())
})