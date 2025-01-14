// My solution
function countWords(str) {
  const breakspaceChar = String.fromCharCode(65279);
  return str
    .replaceAll(breakspaceChar, ' ')
    .split(' ')
    .filter((item) => item !== '').length;
}

// Top solution
function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}
