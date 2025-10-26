export function nonAdjacentSum(nums: number[]): number {
  const memo = new Map<number, number>();

  const dfs = (i: number): number => {
    if (i >= nums.length) return 0;
    if (memo.has(i)) return memo.get(i)!;

    const include = nums[i] + dfs(i + 2);
    const exclude = dfs(i + 1);
    const best = Math.max(include, exclude);
    memo.set(i, best);
    return best;
  };

  return dfs(0);
}
