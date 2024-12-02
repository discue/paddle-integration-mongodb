#!/bin/bash

export NODE_ENV='e2e'

function cancel {
    echo "Received kill signal"
    echo "Initiating shutdown"
    node run-cancel-all-subscriptions || true
    docker stop $(docker ps | grep bore | awk '{ print $1 }')
}

trap cancel EXIT

docker run -it --detach --init --rm --network host ekzhang/bore local 3456 --to bore.pub --port 57143
sleep 5
npm run test-e2e