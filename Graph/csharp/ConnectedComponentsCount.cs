using System.Collections.Generic;

namespace GraphSolutions;

public static class ConnectedComponentsCount
{
    public static int Solve(Dictionary<string, List<string>> graph)
    {
        var visited = new HashSet<string>();
        var count = 0;

        foreach (var node in graph.Keys)
        {
            if (Explore(graph, node, visited))
            {
                count++;
            }
        }

        return count;
    }

    private static bool Explore(Dictionary<string, List<string>> graph, string node, HashSet<string> visited)
    {
        if (!visited.Add(node))
        {
            return false;
        }

        if (!graph.TryGetValue(node, out var neighbors))
        {
            return true;
        }

        foreach (var neighbor in neighbors)
        {
            Explore(graph, neighbor, visited);
        }

        return true;
    }
}
