import {
	every, filter, map, on, onlyEvent, parallel, repeat, seq
} from '../../src/index.js'

export function drawOnCanvas($canvas, options = {}) {
	const { color = 'cyan', lineWidth = 4, lineCap = 'round' } = options

	const isLeftButton = e => e.button === 0

	const eventIterator = repeat(
		() => map(
			parallel(
				filter(
					on($canvas, 'pointerdown'),
					isLeftButton
				),
				on($canvas, 'pointermove'),
				filter(
					on($canvas, 'pointerup'),
					isLeftButton
				),
			),
			({ clientX, clientY, type }) => [type, clientX, clientY]
		)
	)

	const ctx = $canvas.getContext('2d');

	(async () => {
		let isDrawing = false

		for await (const [type, clientX, clientY] of eventIterator) {
			switch (type) {
			case 'pointerdown': {
				ctx.beginPath()
				ctx.moveTo(clientX, clientY)
				ctx.strokeStyle = color
				ctx.lineWidth = lineWidth
				ctx.lineCap = lineCap
				isDrawing = true
				break
			}

			case 'pointerup': {
				ctx.closePath()
				isDrawing = false
				break
			}

			case 'pointermove': {
				if (isDrawing) {
					ctx.lineTo(clientX, clientY)
					ctx.stroke()
				}
				break
			}
			}
		}
	})()
}
