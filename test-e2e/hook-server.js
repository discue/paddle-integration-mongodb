import express from 'express'
import bodyParser from '../lib/body-parser.js'
import { middleware as Middleware, SubscriptionHooks, subscriptionStorage } from '../lib/index.js'
import mongodbClient from '../test/spec/mongodb-client.js'

const app = express()

const client = mongodbClient(27017)
const storage = subscriptionStorage({ client })
const subscriptions = new SubscriptionHooks({ storage })

const middleware = Middleware(subscriptions)

const port = process.env.PORT || 3456

app.use(bodyParser())
app.use((req, _, next) => {
    console.log('Request', req.method, req.path, req.body.alert_name)
    console.log()
    next()
})

app.use((req, res, next) => {
    const { method, path, body } = req
    const { alert_id: id } = body
    const start = Date.now()
    res.on('close', function () {
        let code = this.statusCode
        const durationMs = Date.now() - start
        console.log(`${method} ${path} ${id} ${code} ${durationMs}`)
    })

    next()
})

app.post('/', middleware)

const server = app.listen(port, () => {
    console.log('Payment hook server running on port', port)
})

process.on('SIGTERM', () => {
    server.close((err) => {
        process.exit(err ? 1 : 0)
    })
})

export default server