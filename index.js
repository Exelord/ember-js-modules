'use strict';

module.exports = {
  name: 'ember-js-modules',

  included(parent) {
    parent.options = parent.options || {};
    parent.options.babel = parent.options.babel || {};
    parent.options.babel.plugins = parent.options.babel.plugins || [];
    parent.options.babel.plugins.push('javascript');

    return this._super.included.apply(this, arguments);
  }
};
