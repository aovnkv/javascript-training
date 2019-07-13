/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function findLongestWordLength(str) {
  /**
   * Simple solution
   **/
  //const wordLengthArr = str.split(' ').map(word => word.length);
  //return Math.max(...wordLengthArr);

  /**
   * Solution with Array.reduce
   */
  return str
    .split(' ')
    .reduce((acc, next) => (acc.length > next.length ? acc : next)).length;
}

console.log(
  findLongestWordLength('The quick brown fox jumpedro over the lazy dog')
);
