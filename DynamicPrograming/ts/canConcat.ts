export function canConcat(s: string, words: string[]): boolean {
  const memo = new Map<number, boolean>();

  const dfs = (i: number): boolean => {
    if (i === s.length) return true;
    if (memo.has(i)) return memo.get(i)!;

    for (const word of words) {
      if (s.startsWith(word, i) && dfs(i + word.length)) {
        memo.set(i, true);
        return true;
      }
    }

    memo.set(i, false);
    return false;
  };

  return dfs(0);
}
