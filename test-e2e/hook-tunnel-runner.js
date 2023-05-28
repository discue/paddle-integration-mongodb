const Runner = require('../test/module-runner.js')
const runner = new Runner()

module.exports = {
    start: () => {
        return runner.start('node', ['./node_modules/localtunnel/bin/lt.js', '--port', '3456', '--subdomain', 'slsdkfenf88811xfe'], '.', 'your url is', true)
    },
    stop: () => {
        return runner.stop()
    }
}