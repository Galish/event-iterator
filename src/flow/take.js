/**
 * Yield only the first `count` values from an async iterator.
 * @param {AsyncIterable<any>} asyncIterator
 * @param {number} [count=1]
 * @returns {AsyncGenerator<any, void, undefined>}
 */
export async function* take(asyncIterator, count = 1) {
	let index = 0

	for await (const res of asyncIterator) {
		if (index >= count) {
			return
		}

		index++

		yield res
	}
}
