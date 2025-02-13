// My solution

export const scale = (s: string, k: number, n: number): string => {
  if (s === '') {
    return s;
  }

  if (k === 1 && n === 1) {
    return s;
  }

  const AddkCharsToString = (str: string, char: string): string =>
    str + char.repeat(k);

  const createArrayOfNAlteredLines = (line: string): string[] =>
    new Array(n).fill(line.split('').reduce(AddkCharsToString, ''));

  const repeatLinesAndChars = (arr: any[], line: string): string[] => [
    ...arr,
    ...createArrayOfNAlteredLines(line),
  ];

  return s.split('\n').reduce(repeatLinesAndChars, []).join('\n');
};

/*
Parameters: a string and 2 numbers
Return: a string
Examples:
  scale("abcd\nefgh\nijkl\nmnop", 2, 3) -> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
  scale("Kj\nSH", 1, 2) -> "Kj\nKj\nSH\nSH"
Pseudocode:
  check for edge cases (empty string, both numbers 1, etc.)
  initialize an empty string for the result
  if the k value is > 1 split the string into lines separating by the newline char
  if the n value is > 1 split each line into chars
    add each char x n to the result
    add the newline char at the end if not last line
  
    
  
*/

// Top solution

// export const scale = (s: string, k: number, n: number): string => {
//   if (s == '') return s;
//   const strings = s.split('\n');
//   const horizontalScaled = strings.map((l) => {
//     return l
//       .split('')
//       .map((x) => x.repeat(k))
//       .join('');
//   });

//   let finalString = '';
//   for (const s of horizontalScaled) {
//     finalString += `${s}\n`.repeat(n);
//   }

//   return finalString.slice(0, -1);
// };
