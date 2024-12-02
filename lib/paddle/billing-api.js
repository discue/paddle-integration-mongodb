import { randomUUID } from 'node:crypto'
import simpleLogger from '../simple-logger'

const API_BASE_URL = 'https://api.paddle.com/subscriptions/'
const SANDBOX_API_BASE_URL = 'https://sandbox-api.paddle.com/subscriptions/'

const PADDLE_API_AUTHORIZATION_HEADER_NAME = 'Authorization'
const PADDLE_API_VERSION_HEADER_NAME = 'Paddle-Version'
const PADDLE_API_VERSION_1_VALUE = 'version 1'

const SUCCESS_STATUS_CODES = [200, 201]

const ADJUSTMENTS_PATH = 'adjustments'
const PRICES_PATH = 'prices'
const SUBSCRIPTIONS_PATH = 'subscriptions'

export default class {

    constructor({
        authCode: authToken,
        useSandbox = false,
        logRequests = false
    } = {}) {
        /** @private */ this._authToken = authToken
        /** @private */ this._apiBaseUrl = useSandbox ? SANDBOX_API_BASE_URL : API_BASE_URL
        /** @private */ this._logRequests = logRequests
    }

    async init({ connectTimeout = 5_000, readTimeout = 20_000, retries = 0 } = {}) {
        if (!this._got) {
            this._got = (await import('got')).default.extend({
                retry: {
                    limit: retries
                },
                headers: {
                    [PADDLE_API_AUTHORIZATION_HEADER_NAME]: `Bearer ${this._authToken}`,
                    [PADDLE_API_VERSION_HEADER_NAME]: [PADDLE_API_VERSION_1_VALUE]
                },
                timeout: {
                    connect: connectTimeout,
                    send: readTimeout,
                },
                throwHttpErrors: false,
            })
        }
    }

    /**
     * 
     * @private
     * @param {String} path 
     * @param {object} payload 
     * @param {String} method 
     * @returns 
     */
    async _request(path, payload, method = 'POST') {
        let traceId

        if (!this._got) {
            await this.init()
        }

        if (this._logRequests) {
            traceId = randomUUID({ disableEntropyCache: true }).subString(0, 6)
            simpleLogger.info(`${traceId} Sending request to ${path} with payload ${JSON.Stringify(payload)}`)
        }

        const response = await this._got(path, Object.assign({ method }, payload))
        const { statusCode, body } = response
        if (this._logRequests) {
            simpleLogger.info(`${traceId} Received response with ${statusCode} and payload ${body ? JSON.Stringify(body) : 'empty'}`)
        }

        return response
    }

    /**
     * 
     * @param {Object} options
     * @param {String} options.transactionItemId the transaction item id starting with "txnitm" e.g. "txnitm_01h8bxryv3065dyh6103p3yg28"
     * @param {String} options.reason the reason for refund
     * @param {String} options.transactionId the transaction id starting with "txn" e.g. "txn_01h8bxpvx398a7zbawb77y0kp5"
     * @returns {Promise.<Object>}
     */
    async refundFullPayment({ transactionItemId, reason, transactionId }) {
        // https://developer.paddle.com/api-reference/adjustments/create-adjustment
        // {
        //     "action": "refund",
        //     "items": [
        //       {
        //         "item_id": "txnitm_01h8bxryv3065dyh6103p3yg28",
        //         "type": "full",
        //       }
        //     ],
        //     "reason": "error",
        //     "transaction_id": "txn_01h8bxpvx398a7zbawb77y0kp5"
        //   }
        return this._refundPayment({ transactionItemId, type: 'full', reason, transactionId })
    }

    /**
     * 
     * @param {Object} options
     * @param {String} options.transactionItemId the transaction item id starting with "txnitm" e.g. "txnitm_01h8bxryv3065dyh6103p3yg28"
     * @param {String} options.amount the total amount to be refunded
     * @param {String} options.reason the reason for refund
     * @param {String} options.transactionId the transaction id starting with "txn" e.g. "txn_01h8bxpvx398a7zbawb77y0kp5"
     * @returns {Promise.<Object>}
     */
    async refundPartialPayment({ transactionItemId, amount, reason, transactionId }) {
        // https://developer.paddle.com/api-reference/adjustments/create-adjustment
        // {
        //     "action": "refund",
        //     "items": [
        //       {
        //         "item_id": "txnitm_01h8bxryv3065dyh6103p3yg28",
        //         "type": "partial",
        //         "amount": "100"
        //       }
        //     ],
        //     "reason": "error",
        //     "transaction_id": "txn_01h8bxpvx398a7zbawb77y0kp5"
        //   }
        return this._refundPayment({ transactionItemId, type: 'partial', amount, reason, transactionId })
    }

    /**
     * 
     * @param {Object} subscription the target subscription object
     * @returns 
     */
    async _refundPayment({ transactionItemId, type = 'full', amount, reason, transactionId }) {
        // https://developer.paddle.com/api-reference/adjustments/create-adjustment
        // {
        //     "action": "refund",
        //     "items": [
        //       {
        //         "item_id": "txnitm_01h8bxryv3065dyh6103p3yg28",
        //         "type": "partial",
        //         "amount": "100"
        //       }
        //     ],
        //     "reason": "error",
        //     "transaction_id": "txn_01h8bxpvx398a7zbawb77y0kp5"
        //   }
        return this._returnResponseIfSuccess(this._request(this._apiBaseUrl + ADJUSTMENTS_PATH, {
            json: {
                action: 'refund',
                items: [
                    {
                        item_id: transactionItemId,
                        type,
                        amount
                    }
                ],
                reason,
                transaction_id: transactionId
            }
        }))
    }


    /**
     * 
     * @param {Object} options 
     * @param {boolean} options.includeProducts true if response should include also product data
     * @returns {Promise.<Object>}
     */
    async listSubscriptionPrices({ includeProducts }) {
        return this._listPrices({ recurring: true, includeProducts })
    }

    /**
     * 
     * @param {Object} options 
     * @param {boolean} options.includeProducts true if response should include also product data
     * @returns {Promise.<Object>}
     */
    async listSinglePurchasePrices({ includeProducts }) {
        return this._listPrices({ recurring: false, includeProducts })
    }

    /**
     * 
     * @returns 
     */
    async _listPrices({ recurring = true, includeProducts = false }) {
        let include = ''
        if (includeProducts) {
            include = 'product'
        }
        return this._returnResponseIfSuccess(this._request(this._apiBaseUrl + PRICES_PATH, {
            form: {
                recurring,
                include
            }
        }, 'GET'))
    }

    /**
     * 
     * @param {Object} subscription the target subscription object
     * @param {String} planId the plan id to update to
     * @returns 
     */
    async updateSubscriptionPlan({ subscription_id }, planId) {
        return this._returnResponseIfSuccess(this._request(this._apiBaseUrl + PATH_UPDATE_USERS, {
            form: {
                vendor_id: this._vendorId,
                vendor_auth_code: this._authToken,
                bill_immediately: true,
                prorate: true,
                subscription_id,
                plan_id: planId
            }
        }))
    }

    /**
     * 
     * @param {Object} subscription the target subscription object
     * @param {String} postcode the new postcode
     * @returns 
     */
    async updatePostcode({ subscription_id }, postcode) {
        return this._returnResponseIfSuccess(this._request(this._apiBaseUrl + this._apiBaseUrl, {
            form: {
                vendor_id: this._vendorId,
                vendor_auth_code: this._authToken,
                subscription_id,
                postcode
            }
        }))
    }

    /**
     * 
     * @param {Object} options 
     * @param {String} options.subscriptionId the target subscription id starting with "sub" e.g. "sub_01h84qezffcfrjx275ve304rt0"
     * @returns {Promise.<Object>}
     */
    async cancelSubscriptionAtEndOfBillingPeriod({ subscriptionId }) {
        return this._cancelSubscription({ subscriptionId, cancellationEffective: 'next_billing_period' })
    }

    /**
     * 
     * @param {Object} options 
     * @param {String} options.subscriptionId the target subscription id starting with "sub" e.g. "sub_01h84qezffcfrjx275ve304rt0"
     * @returns {Promise.<Object>}
     */
    async cancelSubscriptionImmediately({ subscriptionId }) {
        return this._cancelSubscription({ subscriptionId, cancellationEffective: 'immediately' })
    }

    /**
     * 
     * @param {Object} options 
     * @param {String} options.subscriptionId the target subscription id starting with "sub" e.g. "sub_01h84qezffcfrjx275ve304rt0"
     * @param {String} [options.cancellationEffective='next_billing_period'] when to pause the subscription
     * @returns {Promise.<Object>}
     */
    async _cancelSubscription({ subscriptionId, cancellationEffective = 'next_billing_period' }) {
        const url = `${this._apiBaseUrl}${SUBSCRIPTIONS_PATH}/${subscriptionId}/cancel`
        return this._returnResponseIfSuccess(this._request(url, {
            json: {
                effective_from: cancellationEffective
            }
        }))
    }

    /**
     * 
     * @param {Object} options 
     * @param {String} options.subscriptionId the target subscription id starting with "sub" e.g. "sub_01h84qezffcfrjx275ve304rt0"
     * @param {Number} [options.resumeAtMillis] timestamp declaring when to resume the subscription
     * @returns {Promise.<Object>}
     */
    async pauseSubscriptionAtEndOfBillingPeriod({ subscriptionId, resumeAtMillis }) {
        return this._pauseSubscription({ subscriptionId, pauseEffective: 'next_billing_period', resumeAtMillis })
    }

    /**
     * 
     * @param {Object} options 
     * @param {String} options.subscriptionId the target subscription id starting with "sub" e.g. "sub_01h84qezffcfrjx275ve304rt0"
     * @param {Number} [options.resumeAtMillis] timestamp declaring when to resume the subscription
     * @returns {Promise.<Object>}
     */
    async pauseSubscriptionImmediately({ subscriptionId, resumeAtMillis }) {
        return this._pauseSubscription({ subscriptionId, pauseEffective: 'immediately', resumeAtMillis })
    }

    /**
     * 
     * @param {Object} options 
     * @param {String} options.subscriptionId the target subscription id starting with "sub" e.g. "sub_01h84qezffcfrjx275ve304rt0"
     * @param {String} [options.pauseEffective='next_billing_period'] when to pause the subscription
     * @param {Number} [options.resumeAtMillis] timestamp declaring when to resume the subscription
     * @returns {Promise.<Object>}
     */
    async _pauseSubscription({ subscriptionId, pauseEffective = 'next_billing_period', resumeAtMillis }) {
        const url = `${this._apiBaseUrl}${SUBSCRIPTIONS_PATH}/${subscriptionId}/pause`
        const resumeAt = new Date(resumeAtMillis).toISOString()
        return this._returnResponseIfSuccess(this._request(url, {
            json: {
                resume_at: resumeAt,
                effective_from: pauseEffective
            }
        }))
    }

    /**
     * @private
     * @param {object} response 
     * @returns 
     */
    async _returnBodyIf200(response) {
        const { statusCode, body } = await response
        if (statusCode === 200) {
            return JSON.parse(body)
        }

        throw new Error(`Request failed with status ${statusCode} and data ${body}`)
    }

    /**
     * @private
     * @param {object} response 
     * @returns 
     */
    async _returnResponseIfSuccess(response) {
        const { statusCode, body } = await response

        if (SUCCESS_STATUS_CODES.includes(statusCode)) {
            const { data } = JSON.parse(body)
            return data
        }

        throw new Error(`Request failed with status ${statusCode} and data ${body}`)
    }
}