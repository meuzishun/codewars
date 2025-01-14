export function positiveSum(arr: number[]): number {
  return arr.reduce((a, c) => (c > 0 ? a + c : a), 0);
}
