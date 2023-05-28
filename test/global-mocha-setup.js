const { MongoMemoryServer } = require('mongodb-memory-server')

let mongod

before(async function () {
    // This will create an new instance of "MongoMemoryServer" and automatically start it
    mongod = await MongoMemoryServer.create({
        instance: {
            port: 27017
        }
    })
})

after(function () {
    return mongod.stop()
})