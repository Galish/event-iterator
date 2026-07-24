/**
 * Yield values from an async iterator until the predicate returns false.
 * @param {AsyncIterable<any>} asyncIterator
 * @param {function(any): boolean} predicate
 * @returns {AsyncGenerator<any, void, undefined>}
 */
export async function* every(asyncIterator, predicate) {
	for await(const res of asyncIterator) {
		if (!predicate?.(res)) {
			return
		}

		yield res
	}
}
