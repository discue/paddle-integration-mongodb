'use strict'

import express from 'express'
import amy from 'node-amy'
const app = express()

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3333

const templateCompiler = new amy.Compiler('test-e2e/test-page', true, {
    reader: {
        registry: {
            enabled: true,
            componentFilePattern: 'fragments/**/*{component.js,.html}'
        }
    }
})

templateCompiler.initialize('**/*.(html)')

const STATIC_CONTENT = ['/images/**', '/css/**']
const ROOT = ['/', '/index.html']

app.use(express.urlencoded({
    extended: false
}))

app.get(STATIC_CONTENT, express.static('test-ui', {
    fallthrough: true
}))

app.get(ROOT, async (req, res) => {
    let { path } = req

    if (!path || path === '/') {
        path = 'index.html'
    } else {
        path = path.substring(1)
    }

    const html = await templateCompiler.compile(path, {}, true)
    res.status(200).send(html)
})

app.get('**/**.html', async (req, res) => {
    let { path } = req
    path = path.substring(1)

    const html = await templateCompiler.compile(path, {}, true)
    res.status(200).send(html)
})

let server

process.on('SIGTERM', () => {
    server.close((err) => {
        process.exit(err ? 1 : 0)
    })
})

server = app.listen(port, () => {
    console.log('Payments test-ui started on', port)
})