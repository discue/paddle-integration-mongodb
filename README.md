
<p align="center">
<a href="https://www.discue.io/" target="_blank" rel="noopener noreferrer"><img width="128" src="https://www.discue.io/icons-fire-no-badge-square/web/icon-192.png" alt="Vue logo">
</a>
</p>

<br/>
<div align="center">

[![GitHub tag](https://img.shields.io/github/tag/discue/paddle-integration-mongodb?include_prereleases=&sort=semver&color=blue)](https://github.com/discue/paddle-integration-mongodb/releases/)
[![Latest Stable Version](https://img.shields.io/npm/v/@discue/paddle-integration-mongodb.svg)](https://www.npmjs.com/package/@discue/paddle-integration-mongodb)
[![License](https://img.shields.io/npm/l/@discue/paddle-integration-mongodb.svg)](https://www.npmjs.com/package/@discue/paddle-integration-mongodb)
<br/>
[![NPM Downloads](https://img.shields.io/npm/dt/@discue/paddle-integration-mongodb.svg)](https://www.npmjs.com/package/@discue/paddle-integration-mongodb)
[![NPM Downloads](https://img.shields.io/npm/dm/@discue/paddle-integration-mongodb.svg)](https://www.npmjs.com/package/@discue/paddle-integration-mongodb)
<br/>
[![contributions - welcome](https://img.shields.io/badge/contributions-welcome-blue)](/CONTRIBUTING.md "Go to contributions doc")
[![Made with Node.js](https://img.shields.io/badge/Node.js->=12-blue?logo=node.js&logoColor=white)](https://nodejs.org "Go to Node.js homepage")

</div>

# paddle-integration-mongodb

[paddle.com](https://www.paddle.com/) payments integration for [MongoDB](https://www.mongodb.com/).

This module provides 
- a body parser function
- a middleware function to receive and store [Paddle Webhooks](https://developer.paddle.com/getting-started/ef9af9f700849-working-with-paddle-webhooks)
- access to the Paddle API.

It does **not** 
- validate webhook content. Use and register [paddle-webhook-validator](https://github.com/discue/paddle-webhook-validator) in your application to validate webhooks before storing them.

## Installation
```bash
npm install @discue/paddle-integration-mongodb
```

## Components
- <a href="README_HOOK_BODY_PARSER.md">Webhooks Body Parser</a>
- <a href="README_HOOK_MIDDLEWARE.md">Webhooks Middleware</a>
- <a href="README_SUBSCRIPTION_INFO.md">Subscription Info</a>
- <a href="README_SUBSCRIPTION_HYDRATION.md">Subscription Hydration</a>
- <a href="README_SUBSCRIPTION_API.md">Subscriptions API</a>

### Preparing a New Subscription
For the webhooks integration to work and to be able to correlate incoming hooks with the correct subscription, a placeholder needs to be created **before the checkout** and - afterward - a specific value must be passed to the [Checkout API](https://developer.paddle.com/guides/ZG9jOjI1MzU0MDQz-pass-parameters-to-the-checkout) via the `passthrough` parameter. This value will be returned by the `addSubscriptionPlaceholder` method.

```js
import { SubscriptionHooks, subscriptionStorage } from '@discue/paddle-integration-mongodb'
import client from './my-mongodb-client.js' // <-- to be provided by your application

const storage = subscriptionStorage({ client })
const subscriptions = new SubscriptionHooks({ storage })

module.exports = async (req, res, next) => {
    // requires application to read api_client information 
    // based on incoming information like a JWT or a cookie
    const { id } = readApiClient(req)

    // create subscription placeholder
    const { passthrough } = await subscriptions.addSubscriptionPlaceholder([id])
    // return the passthrough to the frontend app
    res.status(200).send(JSON.stringify({ passthrough }))
}
```

## Run E2E Tests

To run tests, run the following command

```bash
./test-e2e.sh
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

