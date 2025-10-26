export function overlapSubsequence(str1: string, str2: string): number {
  const memo = new Map<string, number>();

  const dfs = (i: number, j: number): number => {
    if (i === str1.length || j === str2.length) return 0;
    const key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key)!;

    let result: number;
    if (str1[i] === str2[j]) {
      result = 1 + dfs(i + 1, j + 1);
    } else {
      result = Math.max(dfs(i + 1, j), dfs(i, j + 1));
    }

    memo.set(key, result);
    return result;
  };

  return dfs(0, 0);
}
