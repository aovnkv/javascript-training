// Исправить код так, чтобы в результате его выполнения в консоль выводилось
// -> 1. 2
// -> 2. 2
// -> 3. 4

var _x = 1;

var foo = {
  _x: 2,
  bar: function() {
    return this._x;
  }
};

console.log('1. ', foo.bar());
var baz = foo.bar;
baz = baz.bind(foo); //добавил эту строчку
console.log('2. ', baz());

setTimeout(function() {
  console.log('3. ', baz());
}, 0);

var _x = 4;
foo._x = _x; //добавил эту строчку
