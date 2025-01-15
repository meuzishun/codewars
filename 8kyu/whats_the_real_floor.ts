// My solution
export function getRealFloor(n: number): number {
  if (n < 1) {
    return n;
  }

  if (n < 13) {
    return n - 1;
  }

  return n - 2;
}

/*
Parameters: a number
Return: a number
Examples:
  getRealFloor(1) => 0
  getRealFloor(5) => 4
  getRealFloor(15) => 13
Pseudocode:
  if n < 1, return n
  if n < 13, return n - 1
  return n - 2
*/

// Top solution
// export function getRealFloor(n: number): number {
//   return n <= 0 ? n : n <= 13 ? n - 1 : n - 2;
// }
