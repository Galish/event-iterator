# Drawing Demo

This demo shows how to use the event iterator library to draw on a canvas.

## Code

```js
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

for await (const [type, clientX, clientY] of eventIterator) {
	if (type === 'pointerdown') {
		// start drawing
	} else if (type === 'pointermove') {
		// draw line
	}
}
```

## Files
- `demo.html` — page shell and demo bootstrapping
- `script.js` — canvas drawing logic using `src/index.js`
- `styles.css` — demo visuals

## Run
Open `examples/drawing/demo.html` in a browser or run the project via the root `npm start` script and navigate to the demo page.
