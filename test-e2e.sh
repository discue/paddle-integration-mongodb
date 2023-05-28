#!/bin/bash

export NODE_ENV='e2e'

function cancel {
    echo "Received kill signal"
    echo "Initiating shutdown"
    node run-cancel-all-subscriptions
}

trap cancel EXIT

npm run test-e2e