var keys = Object.getOwnPropertyNames(self);

for (var i = 0; i < keys.length; i++) {
  (function() {
    var key = keys[i];
    var value = self[key];

    function vendorModule() {
      'use strict';
      return value;
    }

    define('javascript/' + key, [], vendorModule);
  })();
}

(function() {
  function vendorModule() {
    'use strict';
    return self;
  }

  define('javascript', [], vendorModule);
})();
