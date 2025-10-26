export function minChange(amount: number, coins: number[]): number {
  const memo = new Map<number, number>();

  const dfs = (remaining: number): number => {
    if (remaining < 0) return Infinity;
    if (remaining === 0) return 0;
    if (memo.has(remaining)) return memo.get(remaining)!;

    let best = Infinity;
    for (const coin of coins) {
      const attempt = 1 + dfs(remaining - coin);
      best = Math.min(best, attempt);
    }

    memo.set(remaining, best);
    return best;
  };

  const answer = dfs(amount);
  return Number.isFinite(answer) ? answer : -1;
}
