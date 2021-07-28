import _ from 'lodash';

var sayHello = function sayHello(string) {
  console.log(string);
  alert(string);
};

var version = "1.0.0";

var res = [1, 2, 3].sort(function (a, b) {
  return b - a;
}).join(',');
console.log('version' + version, res);

var arr = _.concat([1, 2, 3], 4, [5]);

sayHello('helle' + arr); // }
