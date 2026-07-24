/**
 * Concatenate multiple async iterators into a single sequential stream.
 * @param {...AsyncIterable<any>} asyncIterators
 * @returns {AsyncGenerator<any, void, undefined>}
 */
export async function* seq(...asyncIterators) {
	for (const asyncIterator of asyncIterators) {
		for await (const res of asyncIterator) {
			yield res
		}
	}
}
