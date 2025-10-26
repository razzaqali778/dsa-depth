export function maxPathSum(grid: number[][]): number {
  const memo = new Map<string, number>();

  const dfs = (r: number, c: number): number => {
    if (r === grid.length || c === grid[0].length) return Number.NEGATIVE_INFINITY;
    if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

    const key = `${r},${c}`;
    if (memo.has(key)) return memo.get(key)!;

    const down = dfs(r + 1, c);
    const right = dfs(r, c + 1);
    const value = grid[r][c] + Math.max(down, right);
    memo.set(key, value);
    return value;
  };

  return dfs(0, 0);
}
