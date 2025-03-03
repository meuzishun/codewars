// My solution

export function findAverage(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  return (
    array.reduce((acc: number, curr: number): number => acc + curr, 0) /
    array.length
  );
}

/*
Parameters: an array of numbers or an empty array
Return: a number that is the average of the numbers in the array
Examples:
  findAverage([1,1,1]) -> 1
  findAverage([1,2,3]) -> 2
  findAverage([]) -> 0
  findAverage([0,10,20]) -> 10
Pseudocode:
  return 0 if array is empty
  reduce the array, summing each value
  return the result divided by the array's length
*/

// Top solution

// export function findAverage(array: number[]): number {
//   return !array.length ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
// }
