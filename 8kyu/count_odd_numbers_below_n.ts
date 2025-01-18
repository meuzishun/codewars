// My Solution
export function oddCount(n: number) {
  return Math.floor(n / 2);
}

/*
Parameters: a number
Return: a number
Examples: oddCount(7) => 3
Pseudocode:
  divide the number by 2 (since half of the numbers will be odd)
  floor the result (since we can't have half a number)
*/

// Top solution
// const maxArray = 4294967295;
// export function oddCount(n: number) {
//   if (n < 1) {
//     return 0;
//   }
//   return Math.trunc(n / 2);
// }
