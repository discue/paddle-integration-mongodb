#!/bin/bash

export NODE_ENV='e2e'

function cancel {
    echo "Received kill signal"
    echo "Initiating shutdown"
    node run-cancel-all-subscriptions || true
    docker stop $(docker ps | grep bore | awk '{ print $1 }')
}

trap cancel EXIT

docker run -it --detach --init --rm --network host ekzhang/bore local --local-host 172.17.0.1 --to bore.pub --port 57143 3456
sleep 5
npm run test-e2e