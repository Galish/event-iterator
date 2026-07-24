/**
 * Merge async iterators into a single stream that yields values as soon as they arrive.
 * @param {...AsyncIterable<any>} asyncIterators
 * @returns {AsyncGenerator<any, void, undefined>}
 */
export async function* parallel(...asyncIterators) {
	const readers = asyncIterators.map(iterator => iterator[Symbol.asyncIterator]())
	const nextPromises = readers.map(reader => reader.next().then(result => ({ reader, result })))

	while (readers.length > 0) {
		const { reader, result } = await Promise.race(nextPromises)
		const index = readers.indexOf(reader)

		if (result.done) {
			readers.splice(index, 1)
			nextPromises.splice(index, 1)
			continue
		}

		yield result.value
		nextPromises[index] = reader.next().then(result => ({ reader, result }))
	}
}
