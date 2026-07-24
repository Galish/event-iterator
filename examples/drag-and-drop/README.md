# Drag & Drop Demo

This demo shows how to build drag-and-drop behavior using the event iterator library.

## Code

```js
const eventIterator = repeat(
	() => map(
		seq(
			once($el, 'mousedown'),
			every(
				parallel(
					on(document.body, 'mousemove'),
					on(document.body, 'mouseup')
				),
				onlyEvent('mousemove')
			)
		),
		({ screenX, screenY, type }) => [screenX, screenY, type]
	)
)

for await (const [x, y, action] of eventIterator) {
	if (action === 'mousedown') {
		// start drag
	} else if (action === 'mousemove') {
		// move element
	}
}
```

## Files
- `demo.html` — page shell and demo bootstrapping
- `script.js` — drag-and-drop logic using `src/index.js`
- `styles.css` — demo visuals

## Run
Open `examples/drag-and-drop/demo.html` in a browser or run the project via the root `npm start` script and navigate to the demo page.
