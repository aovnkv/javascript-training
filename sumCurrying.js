/**
 * Сделайте так чтобы это выражение работало: add(a, b) === add(a)(b)
 */
const sum = () => [].slice.call(arguments).reduce((a, b) => a + b);

const curry = fn => {
  return function curried(...args) {
    const done = args.length >= fn.length;

    if (done) {
      return fn.apply(this, args);
    }
    return (...args2) => curried.apply(this, [...args, ...args2]);
  };
};

const add = curry(sum);

// console.log(add(3, 5, 7) === add(3)(5)(7));

console.log(sum(3, 4));
