'use strict';

module.exports = {
  name: 'ember-js-modules',

  included(app, parentAddon) {
    let target = (parentAddon || app);

    target.options = target.options || {};
    target.options.babel = target.options.babel || {};
    target.options.babel.plugins = target.options.babel.plugins || [];
    target.options.babel.plugins.push('javascript');

    return this._super.included.apply(this, arguments);
  }
};
