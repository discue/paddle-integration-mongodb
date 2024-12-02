import Runner from '../test/module-runner.js'
const runner = new Runner()

export default {
    start: () => {
        return runner.start('node', ['./test-e2e/test-page/index.js'], '.', 'test-ui started on', true)
    },
    stop: () => {
        return runner.stop()
    }
}