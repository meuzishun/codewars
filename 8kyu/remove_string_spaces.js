function noSpace(x) {
  let result = '';
  for (const char of x) {
    if (char !== ' ') {
      result += char;
    }
  }
  return result;
}
