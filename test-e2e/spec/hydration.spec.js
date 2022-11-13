'use strict'

const { test, expect } = require('@playwright/test')
const emulatorRunner = require('../../test/emulators-runner')
const hookRunner = require('../hook-server-runner')
const hookTunnelRunner = require('../hook-tunnel-runner')
const testPageRunner = require('../test-page-runner')

const index = require('../../lib/index')
const subscriptions = new index.SubscriptionsHooks('api_client')

const storageResource = require('../../lib/firestore/nested-firestore-resource')
const storage = storageResource({ documentPath: 'api_client', resourceName: 'api_clients' })

let subscriptionInfo
let api

test.beforeAll(emulatorRunner.start)
test.beforeAll(hookRunner.start)
test.beforeAll(hookTunnelRunner.start)
test.beforeAll(testPageRunner.start)
test.afterAll(testPageRunner.stop)

test.beforeAll(async () => {
    api = new index.Api({ useSandbox: true, authCode: process.env.AUTH_CODE, vendorId: process.env.VENDOR_ID })
    await api.init()

    subscriptionInfo = new index.SubscriptionInfo('api_client', { api, hookStorage: subscriptions })
})

test.beforeEach(async () => {
    try {
        await storage.get(['4815162342'])
        await storage.delete(['4815162342'])
    } catch (e) {
        //
    }
    await storage.put(['4815162342'], {})
})
test.beforeEach(() => {
    return subscriptions.addSubscriptionPlaceholder(['4815162342'])
})

test.afterAll(async () => {
    const subscriptions = await api.listSubscriptions()
    for (let i = 0; i < subscriptions.length; i++) {
        const subscription = subscriptions[i]
        await api.cancelSubscription(subscription)
    }
})

test.afterAll(async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 20000)
    })
    await hookTunnelRunner.stop()
})

test.afterAll(async () => {
    await hookRunner.stop()
})

test.afterAll(emulatorRunner.stop)

async function createNewSubscription(page) {
    await page.goto('http://localhost:3333/checkout.html')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="postcodeInput"]').click()
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="postcodeInput"]').fill('12345')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="postcodeInput"]').press('Enter')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="CARD_PaymentSelectionButton"]').click()
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardNumberInput"]').click()
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardNumberInput"]').fill('4242 4242 4242 4242')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardNumberInput"]').press('Tab')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardholderNameInput"]').fill('Muller')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardholderNameInput"]').press('Tab')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="expiryMonthInput"]').fill('120')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="expiryMonthInput"]').press('Tab')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="expiryYearInput"]').fill('2025')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="expiryYearInput"]').press('Tab')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardVerificationValueInput"]').fill('123')
    await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardVerificationValueInput"]').press('Enter')

    await page.waitForSelector('#paddleSuccess', { state: 'visible', timeout: 50000 })
    await page.waitForSelector('.paddle-loader', { state: 'hidden', timeout: 50000 })
    await page.waitForTimeout(20000)
}

test('hydrate an active subscription', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page)

    let { subscription } = await storage.get(['4815162342'])

    // .. and check subscription is active to make sure setup was correct
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['33590']).toBeTruthy()

    // remove status and payments to verify hydration process
    await storage.update(['4815162342'], {
        'subscription.status': [],
        'subscription.payments': []
    });

    ({ subscription } = await storage.get(['4815162342']))
    // .. expect sub to be not active anymore after we reset all status and payments
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['33590']).toBeFalsy()

    // .. now hydrate status again ..
    await subscriptionInfo.hydrateSubscriptionCreated(['4815162342'], subscription, 'checkoutId');

    // .. and expect subscription to be active again
    ({ subscription } = await storage.get(['4815162342']))
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['33590']).toBeTruthy()
})

test('does not hydrate if status created was already received', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page)

    let { subscription } = await storage.get(['4815162342'])

    // .. and check subscription is active to make sure setup was correct
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['33590']).toBeTruthy()

    // .. now hydrate status again ..
    await subscriptionInfo.hydrateSubscriptionCreated(['4815162342'], subscription, 'checkoutId');

    // .. and expect subscription to be active again
    ({ subscription } = await storage.get(['4815162342']))
    expect(subscription.status).toHaveLength(2)
})

test('hydrate a deleted subscription', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page)

    let { subscription } = await storage.get(['4815162342'])

    // .. and check subscription is active to make sure setup was correct
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['33590']).toBeTruthy()

    try {
        await subscriptionInfo.cancelSubscription(subscription, '33590')
        await page.waitForTimeout(10000)
    } catch (e) {
        if (e.message !== index.SubscriptionInfo.ERROR_SUBSCRIPTION_ALREADY_CANCELLED) {
            throw e
        }
    }

    ({ subscription } = await storage.get(['4815162342']))
    // .. expect sub to be not active anymore in the future
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription, new Date(new Date().getTime() + 1000 * 3600 * 24 * 35))
    expect(sub['33590']).toBeFalsy()

    // remove status and payments to verify hydration process
    await storage.update(['4815162342'], {
        'subscription.status': [],
        'subscription.payments': []
    })

    // .. now hydrate status again ..
    await subscriptionInfo.hydrateSubscriptionCancelled(['4815162342'], subscription, 'checkoutId');

    // .. and expect subscription to be active again
    ({ subscription } = await storage.get(['4815162342']))
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['33590']).toBeFalsy()

    const { status: subscriptionStatus } = subscription
    expect(subscriptionStatus).toHaveLength(1)

    const subscriptionsFromApi = await api.getSubscription(subscription.status.at(0))
    const subscriptionFromApi = subscriptionsFromApi.at(0)

    const status = subscriptionStatus.at(0)

    expect(status.alert_id).toEqual(index.SubscriptionInfo.HYDRATION_SUBSCRIPTION_CANCELLED)
    expect(status.alert_name).toEqual(index.SubscriptionInfo.HYDRATION_SUBSCRIPTION_CANCELLED)
    expect(status.currency).toEqual(subscriptionFromApi.last_payment.currency)
    expect(status.description).toEqual('deleted')
    expect(status.next_bill_date).toBeUndefined()
    expect(status.quantity).toEqual('')
    expect(new Date(status.event_time).getTime()).toBeGreaterThanOrEqual(Date.now() - 2000)
    expect(status.update_url).toBeUndefined()
    expect(status.subscription_id).toEqual(subscriptionFromApi.subscription_id)
    expect(status.subscription_plan_id).toEqual(subscriptionFromApi.plan_id)
    expect(status.cancel_url).toBeUndefined()
    expect(status.checkout_id).toEqual('checkoutId')
    expect(status.vendor_user_id).toEqual(subscriptionFromApi.user_id)
})