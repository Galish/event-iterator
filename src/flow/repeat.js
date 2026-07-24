/**
 * Continuously repeat an async iterator factory as a single infinite stream.
 * @param {function(): AsyncIterable<any>} asyncIteratorFn
 * @returns {AsyncGenerator<any, void, undefined>}
 */
export async function* repeat(asyncIteratorFn) {
	while (true) {
		for await (const res of asyncIteratorFn()) {
			yield res
		}
	}
}
