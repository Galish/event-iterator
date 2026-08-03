# Event Iterator

> **Can DOM events be treated like async streams?**

This project is a small experiment in using native JavaScript async iterators to model browser events as asynchronous sequences.

The goal is simple: explore what happens when UI interactions are expressed as data streams instead of callback-based event listeners.

## Why this idea?

JavaScript already has powerful primitives for working with asynchronous values:

* Promises
* Async functions
* Async iterators

Promises represent single asynchronous values. Async iterators extend that idea to sequences of values, which makes them a natural fit for streams of events like clicks, drags, or keyboard input.

This experiment asks a practical question:

> **What if browser events could be consumed with the same composable style as other async data sources?**

## Example

Here is a small example of the approach:

```js
import { on, map, take } from './src/index.js'

const clicks = on(document, 'click')

const positions = map(
  clicks,
  event => ({
    x: event.clientX,
    y: event.clientY
  })
)

for await (const position of take(5, positions)) {
  console.log(position)
}
```

The idea is not to replace existing event libraries or frameworks. It is to explore a different programming model that uses the language itself in a more direct and composable way.

## Demos

The repository includes a few interactive examples that demonstrate the concept:

* [Drag and Drop example page](https://galish.github.io/event-iterator/examples/drag-and-drop/) ([demo](https://galish.github.io/event-iterator/examples/drag-and-drop/demo.html))
* [Drawing example page](https://galish.github.io/event-iterator/examples/drawing/) ([demo](https://galish.github.io/event-iterator/examples/drawing/demo.html))

These demos show how common browser interactions can be expressed as asynchronous event sequences rather than collections of event listeners.

## Project Status

This repository is still an experiment and a playground for exploring event-driven programming with native JavaScript async iterators.

The API is intentionally small and may evolve as new patterns and use cases emerge.
