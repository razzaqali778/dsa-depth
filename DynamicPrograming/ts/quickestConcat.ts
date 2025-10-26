export function quickestConcat(s: string, words: string[]): number {
  const memo = new Map<number, number>();

  const dfs = (i: number): number => {
    if (i === s.length) return 0;
    if (memo.has(i)) return memo.get(i)!;

    let best = Infinity;
    for (const word of words) {
      if (s.startsWith(word, i)) {
        const attempt = 1 + dfs(i + word.length);
        best = Math.min(best, attempt);
      }
    }

    memo.set(i, best);
    return best;
  };

  const result = dfs(0);
  return Number.isFinite(result) ? result : -1;
}
