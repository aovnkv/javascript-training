/**
 * @param {number} n
 */
let factorial = n => {
  if (isNaN(n)) {
    throw new Error('not a number');
  }
  return n <= 1 ? 1 : n * factorial(n - 1);
};

let fact = n => {
  if (isNaN(n)) {
    throw new Error('not a number');
  } else if (n <= 1) return 1;
  let res = 1;
  for (let i = n; i > 1; i--) {
    res *= i;
  }
  return res;
};

let log = fn => console.log(fn);
log(fact(1));
