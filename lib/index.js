'use strict'

/**
 * @typedef {Object} PaddleIntegrationMongodb
 * @property {import('./subscription-hook-storage.js')} SubscriptionHooks
 * @property {import('./subscription-hydration.js')} SubscriptionHydration
 * @property {import('./subscription-info.js')} SubscriptionInfo
 * @property {import('./storage/mongodb-storage.js')} subscriptionStorage
 * @property {import('./paddle/api.js')} Api
 * @property {import('./middleware.js')} middleware
 * @property {import('./body-parser.js')} bodyParser
 * @property {import('./html-encoder.js')} htmlEncoder
 */

/**
 * @type PaddleIntegrationMongodb
 */
const exp = {
    SubscriptionHooks: require('./subscription-hook-storage'),
    SubscriptionHydration: require('./subscription-hydration'),
    SubscriptionInfo: require('./subscription-info'),
    subscriptionStorage: require('./storage/mongodb-storage.js'),
    middleware: require('./middleware'),
    bodyParser: require('./body-parser'),
    htmlEncoder: require('./html-encoder')
}

function loadApi() {
    import('./paddle/api.js').then((module) => {
        exp.Api = module.default
    })
}

loadApi()

/**
 * @type PaddleIntegrationMongodb
 */
module.exports = new Proxy({}, {
    get: (_, key) => {
        return exp[key]
    }
})