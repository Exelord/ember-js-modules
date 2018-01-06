'use strict';

module.exports = {
  name: 'ember-js-modules',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/shims/javascript.js');
  },
};
