function log(stream, level, values) {
    stream('[\x1b[4mpaddle-integration-mongodb\x1b[0m]', level, values)
}

export default {
    error: (...values) => {
        log(console.error, '\x1b[31mERROR\x1b[0m', ...values)
    },
    info: (...values) => {
        log(console.log, '\x1b[34mINFO\x1b[0m', ...values)
    }
}