/**
 * Сделайте так чтобы это выражение работало: add(a, b) === add(a)(b)
 */
'use strict';
function add() {
  let [a, b] = arguments;
  if (a & b) {
    return a + b;
  } else {
    return function() {
      return a + arguments[0];
    };
  }
}

console.log(add(3, 5));
console.log(add(3)(5));
