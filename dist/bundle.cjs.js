'use strict';

var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

var sayHello = function sayHello(string) {
  console.log(string);
  alert(string);
};

var version = "1.0.0";

var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log('hello ts');
    };
    return Greeter;
}());

var a = new Greeter();
a.greet(); // export default function () {

var res = [1, 2, 3].sort(function (a, b) {
  return b - a;
}).join(',');
console.log('version' + version, res);

var arr = ___default['default'].concat([1, 2, 3], 4, [5]);

sayHello('helle' + arr); // }
