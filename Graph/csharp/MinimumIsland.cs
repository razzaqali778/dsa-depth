using System.Collections.Generic;

namespace GraphSolutions;

public static class MinimumIsland
{
    public static int Solve(char[][] grid)
    {
        var visited = new HashSet<(int, int)>();
        var minSize = int.MaxValue;

        for (var r = 0; r < grid.Length; r++)
        {
            for (var c = 0; c < grid[0].Length; c++)
            {
                var size = Measure(grid, r, c, visited);
                if (size > 0 && size < minSize)
                {
                    minSize = size;
                }
            }
        }

        return minSize == int.MaxValue ? 0 : minSize;
    }

    private static int Measure(char[][] grid, int row, int col, HashSet<(int, int)> visited)
    {
        if (!GraphUtils.InBounds(grid, row, col) || grid[row][col] == 'W')
        {
            return 0;
        }

        var pos = (row, col);
        if (!visited.Add(pos))
        {
            return 0;
        }

        var size = 1;
        foreach (var (dr, dc) in GraphUtils.Directions)
        {
            size += Measure(grid, row + dr, col + dc, visited);
        }

        return size;
    }
}
