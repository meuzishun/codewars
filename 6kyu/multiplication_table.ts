// My solution

export function multiplicationTable(size: number): number[][] {
  return Array.from({ length: size }, (_, i) => i + 1).map((num) =>
    Array.from({ length: size }, (_, j) => num + num * j)
  );
}

/*
Parameters: a number
Return: an array of number arrays
Examples:
  multiplicationTable(1) -> [[1]]
  multiplicationTable(2) -> [[1, 2], [2, 4]]
  multiplicationTable(3) -> [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
Pseudocode:
  create an array with the length of 'size'
  map over that array, creating sub arrays with length of 'size', filled with (i + 1) * size
*/

// Top solution

// export const multiplicationTable = (size: number): number[][] => {
//   const result = [];
//   for (let i = 1; i <= size; i++) {
//     const resultSubArr = [];
//     for (let j = 1; j <= size; j++) {
//       resultSubArr.push(i * j);
//     }
//     result.push(resultSubArr);
//   }
//   return result;
// };
