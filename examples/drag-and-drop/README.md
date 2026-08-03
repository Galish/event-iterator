# Drag & Drop Demo

This demo shows how a drag-and-drop interaction can be modeled as a stream of DOM events. Instead of wiring up separate listeners for each phase of the gesture, the example uses async iteration to compose the behavior as a sequence of events.

## What it demonstrates

The example highlights how mouse down, move, and up events can be treated as a continuous flow of input. The sequence is then transformed into the position updates needed to move an element around the page.

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
	switch (action) {
		case 'mousedown': {
			// start drag
			break
		}

		case 'mousemove': {
			// move element
		}
	}
}
```

## Files
- demo.html — page shell and demo bootstrapping
- script.js — drag-and-drop logic using src/index.js
- styles.css — demo visuals

## Run
Open examples/drag-and-drop/demo.html in a browser, or run the project via the root npm start script and navigate to the demo page.
