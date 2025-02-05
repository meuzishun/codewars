// My solution

export function vaporcode(str: string): string {
  return str
    .split('')
    .reduce(
      (result: string[], char: string): string[] =>
        char !== ' ' ? [...result, char.toUpperCase()] : result,
      []
    )
    .join('  ');
}

/*
Parameters: a string
Return: a string
Examples:
  vaporcode("Lets go to the movies") => "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
  vaporcode("Why isn't my code working") => "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
Questions:
  What happens if a different type other than str is passed in?
  What if nothing is passed in?
  What if more than one strings are passed in?
Thoughts:
  What happens when you call .toUpperCase() on special chars? (i.e. "'", ",", ":", etc.)
  If it just returns the char, we can iterate over the whole string, creating a new str and appending to it based on the specific char
Pseudocode:
  result = ''
  for char of str:
    if char = ' ':
      continue
    else:
      result += char.toUpperCase()
*/

// Top solution

// export function vaporcode(str: string): string {
//   return str.replaceAll(' ', '').toUpperCase().split('').join('  ');
// }
