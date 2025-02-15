// My solution

import { MORSE_CODE } from './preloaded';

export function decodeChar(char: string): string {
  return MORSE_CODE[char];
}

export function decodeWord(word: string): string {
  return word.split(' ').map(decodeChar).join('');
}

export function decodeMorse(morseCode: string): string {
  return morseCode.trim().split('   ').map(decodeWord).join(' ');
}

/*
Parameters: a string of dots, dashes, and spaces
Return: a string of ascii chars
Examples:
  decodeMorse('.... . -.--   .--- ..- -.. .') -> 'HEY JUDE'
  decodeMorse('.-') -> 'A'
  decodeMorse('   .   . ') -> 'E E'
Pseudocode:
  trim the outer spaces
  split the string by 3 spaces
  convert each substr in the array to ascii char in the MORSE_CODE dict
  join the new array and return it
*/

// Top solution

// import { MORSE_CODE } from './preloaded';
// const WORD_SEPARATOR = '   ';
// const LETTER_SEPARATOR = ' ';

// function decodeWord(word: string): string {
//   return word
//     .split(LETTER_SEPARATOR)
//     .map((code) => MORSE_CODE[code])
//     .join('');
// }

// export function decodeMorse(morseCode: string): string {
//   // your code here
//   const morseWords = morseCode.split(WORD_SEPARATOR);

//   return morseWords.map(decodeWord).join(' ').trim();
// }
