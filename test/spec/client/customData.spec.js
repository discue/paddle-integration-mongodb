import { expect } from 'chai'
import customData from '../../../lib/client/custom-data.js'

describe('CustomData', () => {
    it('creates a valid customData object', () => {
        const result = customData([123])
        expect(result).to.have.keys('_pi')
        expect(result._pi).to.have.keys('ids')
        expect(result._pi.ids).to.deep.equal([123])
    })
})