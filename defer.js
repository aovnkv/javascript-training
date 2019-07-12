/**
 * Create a function prototype defer method
 */
'use strict';

Function.prototype.defer = function(ms) {
  var f = this;
  return function() {
    var args = arguments,
      context = this;
    setTimeout(function() {
      f.apply(context, args);
    }, ms);
  };
};

Function.prototype.deferArrowFunc = function(ms) {
  let f = this;
  return function() {
    setTimeout(() => f.apply(null, arguments), ms);
  };
};

// проверка
function f(a, b) {
  console.log(a + b);
}

f.deferArrowFunc(1000)(1, 7); // выведет 3 через 1 секунду.
