/**
 * Filter values from an async iterator by predicate.
 * @param {AsyncIterable<any>} asyncIterator
 * @param {function(any): boolean} predicate
 * @returns {AsyncGenerator<any, void, undefined>}
 */
export async function* filter(asyncIterator, predicate) {
	for await (const res of asyncIterator) {
		if (!predicate?.(res)) {
			continue
		}

		yield res
	}
}
