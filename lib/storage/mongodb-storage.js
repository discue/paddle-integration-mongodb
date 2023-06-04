const { SimpleResourceStorage } = require('@discue/mongodb-resource-client')

/**
 * @typedef ResourceOptions
 * @property {String} url url to mongo instance
 * @property {string} databaseName
 * @property {string} collectionName
 */

/**
 * 
 * @param {ResourceOptions} param0 
 * @returns 
 */
module.exports = ({ url, databaseName = 'default', collectionName = '_subscriptions' }) => {
    return new SimpleResourceStorage({ url, databaseName, collectionName })
}