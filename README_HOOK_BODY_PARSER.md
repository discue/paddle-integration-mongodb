# Webhooks Body Parser
The body parser middleware component is necessary to receive and store payment related hooks from [paddle.com](https://www.paddle.com/). There is nothing special to this body parser. It merely enables parsing of `urlencoded` parameters in request bodies.

Can be used like any old [ExpressJS](https://expressjs.com/) [middleware](https://expressjs.com/en/guide/using-middleware.html). 

## Example
```js
'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3456

const paddleIntegration = require('@discue/paddle-firebase-mongodb')
const storage = paddleIntegration.subscriptionStorage({ url: 'mongodb://localhost:27017' })
const subscriptions = new paddleIntegration.SubscriptionHooks({ storage })

// register body parser first and middleware second
app.use('/_/payments', paddleIntegration.bodyparser())
app.post('/_/payments', paddleIntegration.middleware(subscriptions))

module.exports = app.listen(port)
```