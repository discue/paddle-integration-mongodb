'use strict'

import { expect } from 'chai'
import events from '../../lib/event-emitter.js'
import Middleware from '../../lib/middleware.js'

const DUMMY_REQUEST = (alert) => {
    return {
        body: {
            alert_name: alert
        }
    }
}

const DUMMY_RESPONSE = () => {
    return {
        status: () => {
            return {
                send: () => { }
            }
        }
    }
}

describe('Hook Middleware', () => {

    let middleware

    beforeEach(() => {
        middleware = Middleware(new Proxy({}, {
            get: () => () => { }
        }))
    })

    const eventNames = [
        'subscription_created',
        'subscription_updated',
        'subscription_cancelled',
        'subscription_payment_succeeded',
        'subscription_payment_failed',
        'subscription_payment_refunded',
    ]

    eventNames.forEach(eventName => {
        it(`emits a ${eventName} event`, async () => {
            let eventReceived = false
            events.once(eventName, (args) => {
                eventReceived = true
                expect(args).to.have.keys('alert_name')
            })
            await middleware(DUMMY_REQUEST(eventName), DUMMY_RESPONSE())
            expect(eventReceived).to.be.true
        })
    })
})