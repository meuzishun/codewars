// My solution

export class Kata {
  static squareDigits(num: number): number {
    const numAsStr = String(num);
    const chars = numAsStr.split('');

    const squares = chars.map((char) => {
      const digit = Number(char);
      const squared = digit ** 2;
      return String(squared);
    });

    const squaresStr = squares.join('');
    return Number(squaresStr);
  }
}

/*
Parameters: a number
Return: a number
Examples:
  Kata.squareDigits(9119) -> 811181
  Kata.squareDigits(0) -> 0
Pseudocode:
  convert the number into a string
  split the string into chars
  iterate over each char
    convert the char to a number
    square the number
    convert the number back to a string
  concatenate each string together
  convert the concatenated string to a number
  return the number
*/

// Top solution

// export class Kata {
//   static squareDigits(num: number) {
//     return +num
//       .toString()
//       .split('')
//       .map((n) => Math.pow(+n, 2))
//       .join('');
//   }
// }
