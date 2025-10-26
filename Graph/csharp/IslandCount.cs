using System.Collections.Generic;

namespace GraphSolutions;

public static class IslandCount
{
    public static int Solve(char[][] grid)
    {
        var visited = new HashSet<(int, int)>();
        var count = 0;

        for (var r = 0; r < grid.Length; r++)
        {
            for (var c = 0; c < grid[0].Length; c++)
            {
                if (Explore(grid, r, c, visited))
                {
                    count++;
                }
            }
        }

        return count;
    }

    private static bool Explore(char[][] grid, int row, int col, HashSet<(int, int)> visited)
    {
        if (!GraphUtils.InBounds(grid, row, col) || grid[row][col] == 'W')
        {
            return false;
        }

        var pos = (row, col);
        if (!visited.Add(pos))
        {
            return false;
        }

        foreach (var (dr, dc) in GraphUtils.Directions)
        {
            Explore(grid, row + dr, col + dc, visited);
        }

        return true;
    }
}
