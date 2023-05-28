const { MongoMemoryServer } = require('mongodb-memory-server')

let mongod

module.exports = {
    start: () => {
        // This will create an new instance of "MongoMemoryServer" and automatically start it
        return MongoMemoryServer.create({
            instance: {
                port: 27017,
            },
            binary: {
                version: '6.0.6',
                checkMD5: true
            }
        }).then(mongo => mongod = mongo)
    },
    stop: () => {
        return mongod.stop()
    }
}