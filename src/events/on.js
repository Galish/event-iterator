/**
 * Async generator that yields every event occurrence.
 * @param {EventTarget} target
 * @param {string} type
 * @param {AddEventListenerOptions|boolean} [options]
 * @returns {AsyncGenerator<Event, void, undefined>}
 */
import { oncePromise } from './oncePromise.js'

export async function* on(target, type, options) {
	while (true) {
		yield await oncePromise(target, type, options)
	}
}
