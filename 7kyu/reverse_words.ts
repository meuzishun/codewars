// My solution
export function reverseWords(str: string): string {
  function reverseWord(str: string): string {
    return str.split('').reverse().join('');
  }

  return str.split(' ').map(reverseWord).join(' ');
}

/*
Parameters: a string
Return: a string
Examples:
  reverseWords('The quick brown fox jumps over the lazy dog.') => 'ehT kciuq nworb xof spmuj revo eht yzal .god'
  reverseWords('apple') => 'elppa'
  reverseWords('a b c d') => 'a b c d'
  reverseWords('  double  spaced  words  ') => '  elbuod  decaps  sdrow  '
Questions:
  What happens if an empty string is passed in?
  What happens if more than one string is passed in?
  What happens if a non-string is passed in?
Thoughts:
  I think splitting a string on spaces will still preserve the spaces in the end?
*/
