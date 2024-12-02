import { MongoClient } from "mongodb"

export default (port = 27021) => {
    const client = new MongoClient(`mongodb://localhost:${port}`)
    return client
}