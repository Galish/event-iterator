# Drawing Demo

This demo shows how pointer events can be turned into a simple drawing experience with async iteration. It uses a repeating event stream to combine pointer down, move, and up events into a declarative drawing loop.

## What it demonstrates

The example highlights how continuous input can be modeled as a stream of events and transformed into visual updates on a canvas. It also demonstrates filtering to only respond to left-button input and supporting configurable drawing options such as color, line width, and line cap.

## Code

```js
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
			)
		),
		({ clientX, clientY, type }) => [type, clientX, clientY]
	)
)

for await (const [type, clientX, clientY] of eventIterator) {
	switch (type) {
		case 'pointerdown': {
			// begin a new path
			break
		}

		case 'pointermove': {
			// draw the next segment
			break
		}

		case 'pointerup': {
			// finish the current stroke
			break
		}
	}
}
```

## Files
- demo.html — page shell and demo bootstrapping
- script.js — canvas drawing logic exported as drawOnCanvas($canvas, options = {})
- styles.css — demo visuals

## Run
Open examples/drawing/demo.html in a browser, or run the project via the root npm start script and navigate to the demo page.
