# Drawing Demo

This demo shows how pointer events can be turned into a simple drawing experience with async iteration. It demonstrates how a drawing gesture can be built from a sequence of pointer down, move, and up events.

## What it demonstrates

The example highlights how continuous input can be modeled as a stream of events and transformed into visual updates on a canvas. It is a small illustration of how event-driven interactions can feel more declarative and composable.

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
	switch (action) {
		case 'pointerdown': {
			// start drawing
			break
		}

		case 'pointermove': {
			// draw line
		}
	}
}
```

## Files
- demo.html — page shell and demo bootstrapping
- script.js — canvas drawing logic using src/index.js
- styles.css — demo visuals

## Run
Open examples/drawing/demo.html in a browser, or run the project via the root npm start script and navigate to the demo page.
