/**
 * Create an event filter for a specific event type.
 * @param {string} eventName
 * @returns {(event: Event) => boolean}
 */
export function onlyEvent(eventName) {
	return function(obj) {
		return (
			obj instanceof Event
			&&
			obj.type === eventName
		)
	}
}
