import { SimpleResourceStorage } from '@discue/mongodb-resource-client'

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
export default ({ url, client, databaseName = 'default', collectionName = '_subscriptions' }) => {
    return new SimpleResourceStorage({ url, client, databaseName, collectionName })
}