/**
 * @param {number} n
 */
let factorialRecur = n => {
  if (isNaN(n)) {
    throw new Error('not a number');
  }
  return n <= 1 ? 1 : n * factorial(n - 1);
};

let fact = n => {
  if (isNaN(n)) {
    throw new Error('not a number');
  }
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

function factorial(n){
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
}

let log = fn => console.log(fn);
log(fact(1));
