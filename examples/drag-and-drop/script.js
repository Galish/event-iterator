import {
	every, map, on, once, onlyEvent, parallel, repeat, seq
} from '../../src/index.js'

export function dragAndDrop($el) {
	const $body = document.body;

	const eventIterator = repeat(
		() => map(
			seq(
				once($el, 'mousedown'),
				every(
					parallel(
						on($body, 'mousemove'),
						on($body, 'mouseup')
					),
					onlyEvent('mousemove')
				),
			),
			({ screenX, screenY, type }) => [ screenX, screenY, type ]
		)
	);

	(async function(){
		let initial

		for await (const [ x, y, action ] of eventIterator) {
			switch (action) {
				case 'mousedown': {
					initial ??= [ x, y ]
					break
				}

				default: {
					transform($el, x - initial[ 0 ], y - initial[ 1 ])
				}
			}
		}
	})();
}

function transform($el, x, y) {
	$el.style.transform = `translate(${x}px, ${y}px)`
}
