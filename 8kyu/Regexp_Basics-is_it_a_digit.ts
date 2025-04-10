// My solution

interface String {
  // Necessary, keep it here.
  digit(): boolean;
}

String.prototype.digit = function (): boolean {
  return /^\d$/.test(this.toString());
};

/*
Parameters: none
Return: a boolean
Examples:
  ''.digit() -> false
  '7'.digit() -> true
  ' '.digit() -> false
  'a'.digit() -> false
  assert.strictEqual('a5'.digit(), false);
  assert.strictEqual('14'.digit(), false);
Pseudocode:
*/

// Top solution

interface String {
  // Necessary, keep it here.
  digit(): boolean;
}

String.prototype.digit = function (): boolean {
  return /^\d$/.test(this.valueOf());
};
