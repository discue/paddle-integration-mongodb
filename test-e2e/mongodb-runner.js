const { MongoMemoryServer } = require('mongodb-memory-server')

let mongod

module.exports = {
    start: () => {
        // This will create an new instance of "MongoMemoryServer" and automatically start it
        return MongoMemoryServer.create({
            instance: {
                port: 27017
            },
            binary: {
                checkMD5: true
            }
        }).then(mongo => mongod = mongo)
    },
    stop: () => {
        return mongod.stop()
    }
}