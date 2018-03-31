# ember-js-modules

This addon will allow you to import all globals using js modules.
Thanks to that you will stop using non-explicit variables and detect non-existent API.

This is a wrapper for a babel plugin: [babel-plugin-javacsript](https://github.com/Exelord/babel-plugin-javascript)

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

* `git clone https://github.com/Exelord/ember-js-modules`
* `cd ember-js-modules`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
