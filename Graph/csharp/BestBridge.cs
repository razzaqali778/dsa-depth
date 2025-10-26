using System.Collections.Generic;

namespace GraphSolutions;

public static class BestBridge
{
    public static int Solve(char[][] grid)
    {
        var firstIsland = new HashSet<(int, int)>();
        var found = false;

        for (var r = 0; r < grid.Length && !found; r++)
        {
            for (var c = 0; c < grid[0].Length && !found; c++)
            {
                if (grid[r][c] == 'L')
                {
                    CollectIsland(grid, r, c, firstIsland);
                    if (firstIsland.Count > 0)
                    {
                        found = true;
                    }
                }
            }
        }

        if (firstIsland.Count == 0)
        {
            return 0;
        }

        var visited = new HashSet<(int, int)>(firstIsland);
        var queue = new Queue<(int Row, int Col, int Distance)>();

        foreach (var (row, col) in firstIsland)
        {
            queue.Enqueue((row, col, 0));
        }

        while (queue.Count > 0)
        {
            var (row, col, distance) = queue.Dequeue();
            var current = (row, col);

            if (grid[row][col] == 'L' && !firstIsland.Contains(current))
            {
                return distance - 1;
            }

            foreach (var (dr, dc) in GraphUtils.Directions)
            {
                var nr = row + dr;
                var nc = col + dc;
                var neighbor = (nr, nc);
                if (!GraphUtils.InBounds(grid, nr, nc) || !visited.Add(neighbor))
                {
                    continue;
                }

                queue.Enqueue((nr, nc, distance + 1));
            }
        }

        return -1;
    }

    private static void CollectIsland(char[][] grid, int row, int col, HashSet<(int, int)> island)
    {
        if (!GraphUtils.InBounds(grid, row, col) || grid[row][col] == 'W')
        {
            return;
        }

        var pos = (row, col);
        if (!island.Add(pos))
        {
            return;
        }

        foreach (var (dr, dc) in GraphUtils.Directions)
        {
            CollectIsland(grid, row + dr, col + dc, island);
        }
    }
}
