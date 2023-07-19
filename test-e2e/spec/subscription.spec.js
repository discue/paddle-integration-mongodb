'use strict'

const { randomUUID } = require('crypto')
const { test, expect } = require('@playwright/test')
const { expect: chaiExpect } = require('chai')

const index = require('../../lib/index')
const storage = index.subscriptionStorage({ url: 'mongodb://localhost:27017' })
const subscriptions = new index.SubscriptionHooks({ storage })

let subscriptionInfo
let apiClientId = '4815162342'
let api

test.beforeAll(async () => {
    api = new index.Api({ useSandbox: true, authCode: process.env.AUTH_CODE, vendorId: process.env.VENDOR_ID })
    await api.init()

    subscriptionInfo = new index.SubscriptionInfo({ api, storage })
})

test.beforeEach(async () => {
    apiClientId = randomUUID()
    await subscriptions.addSubscriptionPlaceholder([apiClientId])
})

test.afterAll(async () => {
    const subscriptions = await api.listSubscriptions()
    for (let i = 0; i < subscriptions.length; i++) {
        const subscription = subscriptions[i]
        await api.cancelSubscription(subscription)
    }

    return storage.close()
})

test.afterAll(async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 20000)
    })
})

/**
 * 
 * @param {import('@playwright/test').Page} page 
 * @param {String} apiClientId 
 */
async function createNewSubscription(page, apiClientId) {
    setTimeout(async () => {
        const nextYear = new Date().getFullYear() + 1
        await page.goto(`http://localhost:3333/checkout.html?clientId=${apiClientId}`)
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="postcodeInput"]').click()
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="postcodeInput"]').fill('12345')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="postcodeInput"]').press('Enter')
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardNumberInput"]').click()
        await page.frameLocator('iframe[name="paddle_frame"]').locator('[data-testid="cardNumberInput"]').fill('4000 0566 5566 5556')
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

/**
 * 
 * @param {import('puppeteer').Page} page 
 * @param {*} subscription 
 */
async function updatePaymentMethod(page, subscription) {
    await page.goto(subscription.status[0].update_url)
    await page.locator('[data-testid="CARD_PaymentSelectionButton"]').click()
    await page.locator('[data-testid="cardNumberInput"]').click()
    await page.locator('[data-testid="cardNumberInput"]').fill('4242 4242 4242 4242')
    await page.locator('[data-testid="cardNumberInput"]').press('Tab')
    await page.locator('[data-testid="cardholderNameInput"]').fill('Mullan')
    await page.locator('[data-testid="cardholderNameInput"]').press('Tab')
    await page.locator('[data-testid="expiryMonthInput"]').fill('12')
    await page.locator('[data-testid="expiryMonthInput"]').press('Tab')
    await page.locator('[data-testid="expiryYearInput"]').fill('2030')
    await page.locator('[data-testid="expiryYearInput"]').press('Tab')
    await page.locator('[data-testid="cardVerificationValueInput"]').fill('123')
    await page.locator('[data-testid="cardPaymentFormSubmitButton"]').click()

    // await page1.locator('text=Complete authentication').click()
    // await page.locator('[data-testid="subscriptionManagementSuccess"] div').first().click()
    await page.waitForSelector('[data-testid="subscriptionManagementSuccess"]', { state: 'visible', timeout: 50000 })
}

async function cancelSubscription(page, subscription) {
    await page.goto(subscription.status[0].cancel_url)
    await page.locator('text=Cancel Subscription').click()
    await page.waitForSelector('[data-testid="subscriptionManagementCancelSuccessInfo"]', { state: 'visible', timeout: 50000 })
}

function validateStatus(status) {
    if (status.next_bill_date) {
        chaiExpect(status.next_bill_date).to.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
    }
    chaiExpect(status.alert_id).to.match(/^[0-9]{7,10}$/)
    chaiExpect(status.alert_name).to.match(/subscription_.*/)
    chaiExpect(status.currency).to.match(/EUR|USD/)
    chaiExpect(status.description).to.match(/active|deleted/)
    chaiExpect(status.quantity).to.match(/[0-9]{1}/)
    chaiExpect(status.event_time).to.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}/)
}

test('test cancel via subscription info and subscription object', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page, apiClientId)

    // .. check it was stored and payment status was received ..
    let subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[0])

    // .. and check it is active
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // cancel subscription ...
    subscription = await storage.get([apiClientId])
    const success = await subscriptionInfo.cancelSubscription(subscription, '52450')
    expect(success).toBeTruthy()
    await page.waitForTimeout(10000)

    // ... verify subscription still active today ...
    subscription = await storage.get([apiClientId])
    expect(subscription.status).toHaveLength(2)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[1])

    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // and not active next month (35 days)
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription, new Date(new Date().getTime() + 1000 * 3600 * 24 * 35))
    expect(sub['52450']).toBeFalsy()
})

test('test cancel via subscription info and client id array', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page, apiClientId)

    // .. check it was stored and payment status was received ..
    let subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[0])

    // .. and check it is active
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // cancel subscription ...
    const success = await subscriptionInfo.cancelSubscription([apiClientId], '52450')
    expect(success).toBeTruthy()
    await page.waitForTimeout(10000)

    // ... verify subscription still active today ...
    subscription = await storage.get([apiClientId])
    expect(subscription.status).toHaveLength(2)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[1])

    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // and not active next month (35 days)
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription, new Date(new Date().getTime() + 1000 * 3600 * 24 * 35))
    expect(sub['52450']).toBeFalsy()
})

test('test cancel via api', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page, apiClientId)

    // .. check it was stored and payment status was received ..
    let subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[0])

    // .. and check it is active
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // cancel subscription ...
    const success = await api.cancelSubscription(subscription.status[0])
    expect(success).toBeTruthy()
    await page.waitForTimeout(20000)

    // ... verify subscription still active today ...
    subscription = await storage.get([apiClientId])
    expect(subscription.status).toHaveLength(2)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[1])

    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // and not active next month (35 days)
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription, new Date(new Date().getTime() + 1000 * 3600 * 24 * 35))
    expect(sub['52450']).toBeFalsy()
})

test('test update via subscription info and subscription object', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page, apiClientId)

    // .. check it was stored and payment status was received ..
    let subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[0])

    // .. and check it is active
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // update subscription plan via api ...
    const updated = await subscriptionInfo.updateSubscription(subscription, '52450', '52451')
    expect(updated).toBeTruthy()
    await page.waitForTimeout(30000)

    // .. check  new status and payments added ...
    subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(3)
    expect(subscription.payments).toHaveLength(2)

    // .. and still active
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52451']).toBeTruthy()
    expect(sub['52450']).toBeFalsy()
})

test('test update via subscription info and api client id', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page, apiClientId)

    // .. check it was stored and payment status was received ..
    let subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[0])

    // .. and check it is active
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // update subscription plan via api ...
    const updated = await subscriptionInfo.updateSubscription([apiClientId], '52450', '52451')
    expect(updated).toBeTruthy()
    await page.waitForTimeout(30000)

    // .. check  new status and payments added ...
    subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(3)
    expect(subscription.payments).toHaveLength(2)

    // .. and still active
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52451']).toBeTruthy()
    expect(sub['52450']).toBeFalsy()
})

test('test update via api', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page, apiClientId)

    // .. check it was stored and payment status was received ..
    let subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[0])

    // .. and check it is active
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // update subscription plan via api ...
    await api.updateSubscriptionPlan(subscription.status[0], '52451')
    await page.waitForTimeout(30000)

    // .. check  new status and payments added ...
    subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(3)
    expect(subscription.payments).toHaveLength(2)

    // .. and still active
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52451']).toBeTruthy()
    expect(sub['52450']).toBeFalsy()
})

test('test refund via api', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page, apiClientId)

    // .. check it was stored and payment status was received ..
    let subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[0])

    // .. and check it is active
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // refund subscription plan via api ...
    const refunded = await api.refundFullPayment(subscription.payments[0])
    expect(refunded).toBeTruthy()
    await page.waitForTimeout(30000)

    // .. check no new status and payments added ...
    // .. because refunds need to be reviewed by paddle time 
    // .. it's their money we're playing with
    subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    // .. and still active
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()
})

test('test create, update, and cancel via ui', async ({ page }) => {
    // create new subscription and ...
    await createNewSubscription(page, apiClientId)

    // .. check it was stored and payment status was received ..
    let subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[0])

    // .. and check it is active
    let sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // update payment method ...
    await updatePaymentMethod(page, subscription)
    await page.waitForTimeout(10000)

    // .. check no new status or payments added ...
    subscription = await storage.get([apiClientId])
    expect(subscription).not.toBeFalsy()
    expect(subscription.status).toHaveLength(1)
    expect(subscription.payments).toHaveLength(1)

    // .. and still active
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // cancel subscription ...
    await cancelSubscription(page, subscription)
    await page.waitForTimeout(10000)

    // ... verify subscription still active today ...
    subscription = await storage.get([apiClientId])
    expect(subscription.status).toHaveLength(2)
    expect(subscription.payments).toHaveLength(1)

    validateStatus(subscription.status[1])

    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription)
    expect(sub['52450']).toBeTruthy()

    // and not active next month (35 days)
    sub = await subscriptionInfo.getAllSubscriptionsStatus(subscription, new Date(new Date().getTime() + 1000 * 3600 * 24 * 35))
    expect(sub['52450']).toBeFalsy()
})