import { module, test } from 'ember-qunit';

import JavaScript from 'javascript';
import { Object as JSObject } from 'javascript';

import JSMath from 'javascript/Math';
import { isArray } from 'javascript/Array';

module('javascript', 'Unit | Shim | javascript');

test('it imports self object', function(assert) {
  assert.equal(JavaScript, self);
});

test('it can imports self modules', function(assert) {
  assert.equal(JSMath, self.Math);
});

test('it can destructure modules', function(assert) {
  assert.equal(isArray, self.Array.isArray);
});

test('it can destructure self object', function(assert) {
  assert.equal(JSObject, self.Object);
});
