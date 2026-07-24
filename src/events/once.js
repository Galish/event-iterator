/**
 * Async generator for a single event occurrence.
 * @param {EventTarget} target
 * @param {string} type
 * @param {AddEventListenerOptions|boolean} [options]
 * @returns {AsyncGenerator<Event, void, undefined>}
 */
import { oncePromise } from './oncePromise.js'

export async function* once(target, type, options) {
	yield await oncePromise(target, type, options)
}
