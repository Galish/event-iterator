import {
	every, map, on, once, onlyEvent, parallel, repeat, seq
} from '../../src/index.js'

export function drawOnCanvas($canvas, options = {}) {
	const { color = 'cyan', lineWidth = 4, lineCap = 'round' } = options

	const eventIterator = repeat(
		() => map(
			seq(
				once($canvas, 'pointerdown'),
				every(
					parallel(
						on($canvas, 'pointermove'),
						once($canvas, 'pointerup')
					),
					onlyEvent('pointermove')
				)
			),
			({ clientX, clientY, type }) => [type, clientX, clientY]
		)
	)

	const ctx = $canvas.getContext('2d');

	(async () => {
		for await (const [type, clientX, clientY] of eventIterator) {
			switch (type) {
			case 'pointerdown': {
				ctx.beginPath()
				ctx.moveTo(clientX, clientY)
				ctx.strokeStyle = color
				ctx.lineWidth = lineWidth
				ctx.lineCap = lineCap
				continue
			}

			case 'pointermove': {
				ctx.lineTo(clientX, clientY)
				ctx.stroke()
			}
			}
		}
	})()
}
