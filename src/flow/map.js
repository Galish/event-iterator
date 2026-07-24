/**
 * Transform values from an async iterator through one or more mapping functions.
 * @param {AsyncIterable<any>} asyncIterator
 * @param {...function(any): any} modifiers
 * @returns {AsyncGenerator<any, void, undefined>}
 */
export async function* map(asyncIterator, ...modifiers) {
	for await (const res of asyncIterator) {
		let value = res

		for (const fn of modifiers) {
			value = fn(value)
		}

		yield value
	}
}
