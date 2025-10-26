export function tribonacci(n: number, memo: Record<number, number> = {}): number {
  if (n === 0 || n === 1) return n;
  if (n === 2) return 1;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
}
