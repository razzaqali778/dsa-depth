export function summingSquares(n: number): number {
  const memo = new Map<number, number>();

  const dfs = (value: number): number => {
    if (value === 0) return 0;
    if (memo.has(value)) return memo.get(value)!;

    let best = Infinity;
    for (let i = 1; i * i <= value; i += 1) {
      const square = i * i;
      const attempt = 1 + dfs(value - square);
      best = Math.min(best, attempt);
    }

    memo.set(value, best);
    return best;
  };

  return dfs(n);
}
