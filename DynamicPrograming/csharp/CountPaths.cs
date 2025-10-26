using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class CountPaths
{
    public static int Count(string[][] grid)
    {
        var rows = grid.Length;
        var cols = rows == 0 ? 0 : grid[0].Length;
        var memo = new Dictionary<(int, int), int>();
        return Dfs(0, 0, grid, rows, cols, memo);
    }

    private static int Dfs(int r, int c, string[][] grid, int rows, int cols, IDictionary<(int, int), int> memo)
    {
        if (r >= rows || c >= cols || grid[r][c] == "X")
        {
            return 0;
        }

        if (r == rows - 1 && c == cols - 1)
        {
            return 1;
        }

        var key = (r, c);
        if (memo.TryGetValue(key, out var cached))
        {
            return cached;
        }

        var paths = Dfs(r + 1, c, grid, rows, cols, memo) + Dfs(r, c + 1, grid, rows, cols, memo);
        memo[key] = paths;
        return paths;
    }
}
