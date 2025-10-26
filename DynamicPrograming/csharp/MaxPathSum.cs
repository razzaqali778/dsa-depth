using System;
using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class MaxPathSum
{
    public static int MaxSum(int[][] grid)
    {
        var rows = grid.Length;
        if (rows == 0)
        {
            return 0;
        }

        var cols = grid[0].Length;
        var memo = new Dictionary<(int, int), int>();
        return Dfs(0, 0, grid, rows, cols, memo);
    }

    private static int Dfs(int r, int c, int[][] grid, int rows, int cols, IDictionary<(int, int), int> memo)
    {
        if (r == rows || c == cols)
        {
            return int.MinValue / 2;
        }

        if (r == rows - 1 && c == cols - 1)
        {
            return grid[r][c];
        }

        var key = (r, c);
        if (memo.TryGetValue(key, out var cached))
        {
            return cached;
        }

        var down = Dfs(r + 1, c, grid, rows, cols, memo);
        var right = Dfs(r, c + 1, grid, rows, cols, memo);
        memo[key] = grid[r][c] + Math.Max(down, right);
        return memo[key];
    }
}
