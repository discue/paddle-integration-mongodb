import { expect } from 'chai'
import encode from '../../lib/html-encoder.js'

describe('HtmlEncoder', () => {
    it('encodes recursively', () => {
        const object = {
            nested1: {
                nested2: {
                    left: '<',
                    right: '>'
                }
            }
        }

        const encoded = encode(object)
        expect(encoded.nested1.nested2.left).to.equal('&lt;')
        expect(encoded.nested1.nested2.right).to.equal('&gt;')
    })
})