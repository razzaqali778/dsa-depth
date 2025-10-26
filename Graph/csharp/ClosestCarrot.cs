using System.Collections.Generic;

namespace GraphSolutions;

public static class ClosestCarrot
{
    public static int Solve(char[][] grid, int startRow, int startCol)
    {
        var queue = new Queue<(int Row, int Col, int Distance)>();
        var visited = new HashSet<(int, int)> { (startRow, startCol) };

        queue.Enqueue((startRow, startCol, 0));

        while (queue.Count > 0)
        {
            var (row, col, distance) = queue.Dequeue();
            if (grid[row][col] == 'C')
            {
                return distance;
            }

            foreach (var (dr, dc) in GraphUtils.Directions)
            {
                var nr = row + dr;
                var nc = col + dc;
                var neighbor = (nr, nc);

                if (!GraphUtils.InBounds(grid, nr, nc) || grid[nr][nc] == 'X' || !visited.Add(neighbor))
                {
                    continue;
                }

                queue.Enqueue((nr, nc, distance + 1));
            }
        }

        return -1;
    }
}
