const { MongoClient } = require('mongodb')

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
    let mongoDbClient = new MongoClient(url)

    return {

        /**
         * 
         * @returns {import('mongodb').MongoClient}
         */
        async _getConnectedClient() {
            if (mongoDbClient?.topology?.isConnected()) {
                return mongoDbClient
            } else {
                return mongoDbClient.connect()
            }
        },

        /**
         * 
         * @returns {import('mongodb').Collection}
         */
        async _getCollection() {
            const client = await this._getConnectedClient()
            const db = client.db(databaseName)
            return db.collection(collectionName)
        },

        _toStringIfArray(ids) {
            if (Array.isArray(ids)) {
                return ids.join('/')
            } else {
                return ids
            }
        },

        /**
         * Get a resource by ids
         * 
         * @param {Array.<String>} resourceIds resource ids that will added to the resource path i.e. /users/${id}/documents/${id}
         * @returns 
         */
        async get(resourceIds) {
            const collection = await this._getCollection()
            return collection.findOne({
                _id: this._toStringIfArray(resourceIds)
            })
        },

        /**
         * @alias for .get
         * @param {Array.<String>} resourceIds 
         * @returns 
         */
        async exists(resourceIds) {
            return this.get(resourceIds)
        },

        /**
         * Add a resource to a collection by ids
         * 
         * @param {Array.<String>} resourceIds resource ids that will added to the resource path i.e. /users/${id}/documents/${id}
         * @param {Object} resource the resource to be stored
         * @returns 
         */
        async put(resourceIds, resource) {
            const exists = await this.exists(resourceIds)
            if (exists) {
                throw new Error(`${resourceIds} already exists. ${JSON.stringify(exists)}`)
            }

            const collection = await this._getCollection()
            const result = await collection.insertOne(Object.assign(resource, {
                _id: this._toStringIfArray(resourceIds)
            }))

            const success = result.acknowledged === true
            if (!success) {
                throw new Error(`Was not able to insert ${resourceIds} with resource ${resource}`)
            }
        },

        /**
         * Update a resource by ids
         * 
         * @param {Array.<String>} resourceIds resource ids that will added to the resource path i.e. /users/${id}/documents/${id}
         * @param {Object} update values that should be updated
         * @returns 
         */
        async update(resourceIds, update) {
            const exists = await this.exists(resourceIds)
            if (!exists) {
                throw new Error(`${resourceIds} does not exist.`)
            }

            const collection = await this._getCollection()
            const result = await collection.updateOne({
                _id: this._toStringIfArray(resourceIds)
            }, update)

            const success = result.acknowledged === true
            if (!success) {
                throw new Error(`Was not able to update ${resourceIds} with resource ${update}.`)
            }
        },

        /**
         * Delete a resource by ids
         * 
         * @param {Array.<String>} resourceIds resource ids that will added to the resource path i.e. /users/${id}/documents/${id}
         * @returns 
         */
        async delete(resourceIds) {
            const exists = await this.exists(resourceIds)
            if (!exists) {
                throw new Error(`${resourceIds} does not exist.`)
            }

            const collection = await this._getCollection()
            const result = await collection.deleteOne({
                _id: this._toStringIfArray(resourceIds)
            })

            const success = result.acknowledged === true
            if (!success) {
                throw new Error(`Was not able to delete ${resourceIds}.`)
            }
        }
    }
}