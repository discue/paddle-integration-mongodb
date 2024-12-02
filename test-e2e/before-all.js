import hookRunner from './hook-server-runner.js'
import hookTunnelRunner from './hook-tunnel-runner.js'
import mongoDbRunner from './mongodb-runner.js'
import testPageRunner from './test-page-runner.js'

export default async () => {
    await testPageRunner.start()
    await hookTunnelRunner.start()
    await hookRunner.start()
    await mongoDbRunner.start()
}