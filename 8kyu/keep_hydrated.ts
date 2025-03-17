// My solution

export function litres(time: number): number {
  return Math.floor(time / 2);
}

/*
Parameters: a number
Return: a number, half of what is input, rounded down
Examples:
  litres(2) -> 1
  litres(1.4) -> 0
  litres(12.3) -> 6
  litres(0.82) -> 0
  litres(11.8) -> 5
  litres(1787) -> 893
  litres(0) -> 0
Pseudocode:
  return parseInt(time / 2);
*/

// Top solution

/**
 * Get number of litres to drink (rounded to smallest value)
 */
// export function litres(time: number): number {
//   return Math.floor(0.5 * time);
// }
