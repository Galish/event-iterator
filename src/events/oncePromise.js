/**
 * Create a helper that returns a Promise for the next event occurrence.
 * @param {EventTarget} target
 * @param {string} type
 * @param {AddEventListenerOptions|boolean} [options]
 * @returns {Promise<Event>}
 */
export function oncePromise(target, type, options) {
	return new Promise(resolve => {
		function handler(event) {
			resolve(event)
			target.removeEventListener(type, handler, options)
		}

		target.addEventListener(type, handler, options)
	})
}
