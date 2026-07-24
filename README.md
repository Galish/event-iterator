# Event Iterator

> **What if DOM events were just another asynchronous data source?**

An experiment exploring event-driven programming with native JavaScript async iterators.

The repository contains a small proof of concept together with several interactive demos exploring this programming model.

## The Question

JavaScript has supported asynchronous iteration for years through `async function*` and `for await...of`, yet these language features are rarely used for UI programming.

This project started with a simple question:

> **Can DOM events be represented as async iterators instead of event listeners?**

Rather than introducing another abstraction, this experiment explores what interactive applications look like when browser events are represented as asynchronous sequences and consumed using native JavaScript language features.

## Why?

Modern JavaScript provides powerful primitives for asynchronous programming:

* Promises
* Async functions
* Async iterators

Promises have become the standard way to model asynchronous values. Async iterators extend the same idea to asynchronous sequences, making them a natural fit for streams of events.

This project explores what becomes possible when browser events are modeled as async iterables using only native language features.

The goal is **not** to replace existing event libraries or reactive frameworks. Instead, it's an exploration of a different programming model that embraces the language itself.

## Example

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

## Examples

The repository currently includes several demonstrations of the concept:

* [Drag and Drop Demo](https://galish.github.io/examples/event-iterator/drag-and-drop/demo.html)
* [Drawing Demo](https://galish.github.io/examples/event-iterator/drawing/demo.html)

These examples show how common browser interactions can be expressed as asynchronous event sequences rather than collections of event listeners.

## Project Status

This repository is an experiment and a playground for exploring event-driven programming with native JavaScript async iterators.

The API is intentionally small and may evolve as different ideas, patterns, and use cases are explored.
