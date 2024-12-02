import { MongoMemoryReplSet } from 'mongodb-memory-server'

let mongod

before(async function () {
    // This will create an new instance of 'MongoMemoryServer' and automatically start it
    mongod = await MongoMemoryReplSet.create({
        instanceOpts: [{
            args: ['--setParameter', 'notablescan=1'],
            port: 27021
        }],
        replSet: {
            count: 1
        },
        binary: {
            version: '6.0.0'
        }
    })
})

after(function () {
    return mongod.stop()
})