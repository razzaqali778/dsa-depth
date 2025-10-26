export function fib(n: number, memo: Record<number, number> = {}): number {
  if (n === 0 || n === 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
