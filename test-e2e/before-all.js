'use strict'

const mongoDbRunner = require('./mongodb-runner.js')
const hookRunner = require('./hook-server-runner')
const hookTunnelRunner = require('./hook-tunnel-runner')
const testPageRunner = require('./test-page-runner')

module.exports = async () => {
    await testPageRunner.start()
    await hookTunnelRunner.start()
    await hookRunner.start()
    await mongoDbRunner.start()
}