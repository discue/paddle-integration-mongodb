/**
 * Creates a passthrough/customData object that can be passed to Paddle Checkout.
 * Guarantees the passthrough/customData object will be understood by
 * the paddle integration middleware.
 * 
 * @param {Array} ids 
 */
export default (ids) => {
    return {
        _pi: { ids }
    }
}