(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lodash')) :
    typeof define === 'function' && define.amd ? define(['lodash'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global._));
}(this, (function (_) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

    var sayHello = function sayHello(string) {
      console.log(string);
      alert(string);
    };

    var version = "1.0.0";

    var res = [1, 2, 3].sort(function (a, b) {
      return b - a;
    }).join(',');
    console.log('version' + version, res);

    var arr = ___default['default'].concat([1, 2, 3], 4, [5]);

    sayHello('helle' + arr); // }

})));
