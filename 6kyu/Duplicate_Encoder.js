// My solution

function duplicateEncode(word) {
  const countDict = {};

  const chars = word.split('');

  chars.forEach((char) => {
    const c = char.toLowerCase();

    if (countDict[c]) {
      countDict[c] += 1;
    } else {
      countDict[c] = 1;
    }
  });

  let encoded = '';

  chars.forEach((char) => {
    const c = char.toLowerCase();

    if (countDict[c] === 1) {
      encoded += '(';
    }

    if (countDict[c] > 1) {
      encoded += ')';
    }
  });

  return encoded;
}

/*
Parameters: a string
Return: a string of parentheses
Examples:
  duplicateEncode("din") -> "((("
  duplicateEncode("recede") -> "()()()"
  duplicateEncode("Success") -> ")())())"  ("should ignore case")
  duplicateEncode("(( @") -> "))(("
Pseudocode:
  Iterate over the string, creating a countDict for each char (don't forget to convert to lowerCase)
  Iterate over the string again, this time creating a new string based on the count of each char in the countDict
*/

// Top solution

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
