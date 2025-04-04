// My solution

export default function isSquare(n: number): boolean {
  const sqrt = Math.sqrt(n);
  return sqrt === Math.round(sqrt);
}

/*
Parameters: a number
Return: a boolean
Examples:
  isSquare(-1) -> false
  isSquare(0) -> true
  isSquare(3) -> false
  isSquare(4) -> true
  isSquare(25) -> true
  isSquare(26) -> false
Pseudocode:
  get the square root of the number
  return weather or not that number is a whole number
*/

// Top solution

// export default function isSquare(n: number): boolean {
//   return Number.isInteger(Math.sqrt(n));
// };
