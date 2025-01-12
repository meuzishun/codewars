// My solution
function alphaSeq(str) {
  let result = '';
  const sortedChars = str.toLowerCase().split('').sort();

  for (let i = 0, l = sortedChars.length; i < l; i++) {
    const char = sortedChars[i];
    const alphaNum = char.charCodeAt() - 97;
    const charString = char.toUpperCase() + char.repeat(alphaNum);
    result += charString;

    if (i < l - 1) {
      result += ',';
    }
  }

  return result;
}

// Top voted "Best Practices"
const alphaSeq = (s) =>
  [...s.toLowerCase()]
    .sort()
    .map((c) => c.toUpperCase() + c.repeat(c.charCodeAt() - 97)).join`,`;
