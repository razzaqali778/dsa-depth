export function maxPalinSubsequence(s: string): number {
  const memo = new Map<string, number>();

  const dfs = (i: number, j: number): number => {
    if (i === j) return 1;
    if (i > j) return 0;
    const key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key)!;

    let result: number;
    if (s[i] === s[j]) {
      result = 2 + dfs(i + 1, j - 1);
    } else {
      result = Math.max(dfs(i + 1, j), dfs(i, j - 1));
    }
    memo.set(key, result);
    return result;
  };

  if (!s.length) return 0;
  return dfs(0, s.length - 1);
}
