// My solution
export function descendingOrder(n: number): number {
  return Number(`${n}`.split('').sort().reverse().join(''));
}

// Top solution
// export function descendingOrder(
//   n: number | null | undefined
// ): number | null | undefined {
//   return n ? parseInt(n.toString().split('').sort().reverse().join('')) : n;
// }

// Similar to mine
// export function descendingOrder(n: number): number {
//   return parseInt(n.toString().split('').sort().reverse().join(''));
// }
