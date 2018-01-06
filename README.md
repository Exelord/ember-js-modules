# ember-js-modules

This addon will allow you to import all globals using js modules.
Thanks to that you will stop using non-explicit variables and detect non-existent API.

> I know, the idea is crazy but it seems to work 😅

## Usage

```js
import JavaScript from 'javascript';
// You can access all globals like from self
```

```js
import { Object } from 'javascript';
// You can also destructure a single object
```

```js
import Math from 'javascript/Math';
// You can even import explicit module
```

```js
import { abs } from 'javascript/Math';
// And of course, desctruct it
```

## Installation
`ember install ember-js-modules`

## Development

### Installation

* `git clone https://github.com/Exelord/ember-js-modules` this repository
* `cd ember-js-modules`
* `npm install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
