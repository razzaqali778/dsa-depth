using System.Collections.Generic;

namespace GraphSolutions;

public static class HasPath
{
    public static bool Solve(Dictionary<string, List<string>> graph, string src, string dst)
    {
        if (src == dst)
        {
            return true;
        }

        var visited = new HashSet<string>();
        return Dfs(graph, src, dst, visited);
    }

    private static bool Dfs(Dictionary<string, List<string>> graph, string node, string dst, HashSet<string> visited)
    {
        if (node == dst)
        {
            return true;
        }
        if (!visited.Add(node))
        {
            return false;
        }

        if (!graph.TryGetValue(node, out var neighbors))
        {
            return false;
        }

        foreach (var neighbor in neighbors)
        {
            if (Dfs(graph, neighbor, dst, visited))
            {
                return true;
            }
        }

        return false;
    }
}
