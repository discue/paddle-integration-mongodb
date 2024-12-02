import Runner from '../test/module-runner.js'
const runner = new Runner()

export default {
    start: () => {
        return runner.start('node', ['./test-e2e/hook-server.js'], '.', 'running on port', true)
    },
    stop: () => {
        return runner.stop()
    }
}