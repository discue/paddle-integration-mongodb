export default async (callback, { maxRetries = 10, delay = 250, backOff = 4 } = {}) => {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            await callback()
        } catch (e) {
            if (i === maxRetries) {
                throw e
            }

            const time = delay * i * backOff
            console.log(`Caught error ${e}. Will retry ${maxRetries - i} more times after ${time}ms.`)
            await new Promise((resolve) => setTimeout(resolve, time))
        }
    }
}