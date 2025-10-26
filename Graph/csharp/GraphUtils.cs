using System.Collections.Generic;

namespace GraphSolutions;

public static class GraphUtils
{
    public static Dictionary<string, List<string>> BuildUndirectedGraph(IEnumerable<(string, string)> edges)
    {
        var graph = new Dictionary<string, List<string>>();
        foreach (var (a, b) in edges)
        {
            if (!graph.ContainsKey(a))
            {
                graph[a] = new List<string>();
            }
            if (!graph.ContainsKey(b))
            {
                graph[b] = new List<string>();
            }
            graph[a].Add(b);
            graph[b].Add(a);
        }

        return graph;
    }

    public static bool InBounds(char[][] grid, int row, int col)
    {
        return row >= 0 && row < grid.Length && col >= 0 && col < grid[0].Length;
    }

    public static readonly (int, int)[] Directions =
    {
        (-1, 0),
        (1, 0),
        (0, -1),
        (0, 1),
    };
}
