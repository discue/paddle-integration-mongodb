import { MongoMemoryServer } from "mongodb-memory-server"

let mongod

export default {
    start: () => {
        // This will create an new instance of "MongoMemoryServer" and automatically start it
        return MongoMemoryServer.create({
            instance: {
                port: 27017,
            },
        }).then(mongo => mongod = mongo)
    },
    stop: () => {
        return mongod.stop()
    }
}