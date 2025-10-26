export function countPaths(grid: string[][]): number {
  const memo = new Map<string, number>();

  const dfs = (r: number, c: number): number => {
    if (r >= grid.length || c >= grid[0].length || grid[r][c] === 'X') {
      return 0;
    }
    if (r === grid.length - 1 && c === grid[0].length - 1) {
      return 1;
    }

    const key = `${r},${c}`;
    if (memo.has(key)) return memo.get(key)!;

    const paths = dfs(r + 1, c) + dfs(r, c + 1);
    memo.set(key, paths);
    return paths;
  };

  return dfs(0, 0);
}
