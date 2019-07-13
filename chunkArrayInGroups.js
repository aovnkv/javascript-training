/*
Chunky Monkey
Write a function that splits an array (first argument) into groups
the length of size (second argument) and returns them as a
two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  const resultArr = [];

  for (let i = 0; i < arr.length; i += size) {
    resultArr.push(arr.slice(i, i + size));
  }

  return resultArr;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
