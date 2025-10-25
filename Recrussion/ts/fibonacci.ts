const memo = new Map<number, number>([
  [0, 0],
  [1, 1],
]);

export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error("n must be non-negative");
  }

  if (memo.has(n)) {
    return memo.get(n)!;
  }

  const value = fibonacci(n - 1) + fibonacci(n - 2);
  memo.set(n, value);
  return value;
}
