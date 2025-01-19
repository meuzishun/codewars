// My solution
export function solution(nums: number[]): number[] {
  if (!nums) {
    return [];
  }

  return nums.sort((a, b) => a - b);
}

/*
Parameters: an array of numbers
Return: an array of numbers or empty
Examples:
  solution([1, 2, 10, 50, 5]) => [1,2,5,10,50]
  solution([]) => []
Pseudocode:
  if !num or nums.length === 0:
    return [];
  return nums.toSorted();
*/

// Top solution
// export const solution = (nums: number[]) => nums.sort((a, b) => a - b);

// Another one (better, IMHO)
// export function solution(nums: number[]): number[] {
//   return nums ? nums.sort((a, b) => a - b) : [];
// }
