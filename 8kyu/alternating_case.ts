// My solution
export function toAlternatingCase(s: string): string {
  let results = '';

  for (const char of s) {
    if (char === char.toUpperCase()) {
      results += char.toLowerCase();
    } else {
      results += char.toUpperCase();
    }
  }

  return results;
}

/*
Parameters: a string

Return: a string

Examples:
  toAlternatingCase("hello world") => "HELLO WORLD"
  toAlternatingCase("HeLLo WoRLD") => "hEllO wOrld"
  toAlternatingCase("1a2b3c4d5e") => "1A2B3C4D5E"

Questions:
  What happens if the string is empty?
  What happens when some other type is passed in?

Thoughts:
  It looks like toUpperCase "works" on str digits (doesn't change them)
  Loop over the string... if the char matches its upper case version, return the lowercase version
Pseudocode:
  results = ''
  for char in str:
    if char.toUpperCase() === char:
      append char.toLowerCase()
    else append char.toUpperCase()
  return results
*/

// Top solution

// export function toAlternatingCase(s: string): string {
//   return s
//     .split('')
//     .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//     .join('');
// }
