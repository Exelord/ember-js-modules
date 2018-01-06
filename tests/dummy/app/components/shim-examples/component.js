import Component from '@ember/component';
import { computed } from '@ember/object';

import JavaScript from 'javascript';
import { Object as JSObject } from 'javascript';

import JSMath from 'javascript/Math';
import { isArray } from 'javascript/Array';

export default Component.extend({
  isArrayExample: computed(function() {
    return isArray([]);
  }),

  jsMathExample: computed(function() {
    return JSMath.round(2.33);
  }),

  jsObjectExample: computed(function() {
    return new JSObject({ test: 'works' });
  }),

  javascriptExample: computed(function() {
    return JavaScript.screenY;
  }),
});
