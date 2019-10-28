let foo = { n: 1 };

let bar = foo;

foo.x = foo = { n: 2 };

console.log(bar);
