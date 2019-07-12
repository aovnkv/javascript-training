const palindrom = str =>
  str ===
  str
    .split('')
    .reverse()
    .join('');

console.log(palindrom('garag'));
