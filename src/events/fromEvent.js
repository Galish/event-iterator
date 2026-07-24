/**
 * Alias for `on` to create a readable event stream.
 * @param {EventTarget} target
 * @param {string} type
 * @param {AddEventListenerOptions|boolean} [options]
 * @returns {AsyncGenerator<Event, void, undefined>}
 */
import { on } from './on.js'

export function fromEvent(target, type, options) {
	return on(target, type, options)
}
