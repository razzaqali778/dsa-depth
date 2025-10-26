export function countingChange(amount: number, coins: number[]): number {
  const memo = new Map<string, number>();

  const dfs = (remaining: number, index: number): number => {
    const key = `${remaining},${index}`;
    if (memo.has(key)) return memo.get(key)!;
    if (remaining === 0) return 1;
    if (index === coins.length) return 0;

    const coin = coins[index];
    let ways = 0;
    for (let qty = 0; qty * coin <= remaining; qty += 1) {
      ways += dfs(remaining - qty * coin, index + 1);
    }

    memo.set(key, ways);
    return ways;
  };

  return dfs(amount, 0);
}
