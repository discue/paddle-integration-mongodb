import { encode as encodeHtml } from 'html-entities'

function encode(object) {
    const result = {}

    if (typeof object === 'string') {
        return encodeHtml(object)
    }
    Object.entries(object).forEach(([key, value]) => {
        if (typeof value === 'object') {
            result[key] = encode(value)
        } else if (value === false) {
            result[key] = false
        } else {
            result[key] = encodeHtml(value)
        }
    })

    return result
}

export default encode 