using System.Collections.Generic;

namespace GraphSolutions;

public static class HasCycle
{
    public static bool Solve(Dictionary<string, List<string>> graph)
    {
        var visiting = new HashSet<string>();
        var visited = new HashSet<string>();

        foreach (var node in graph.Keys)
        {
            if (Detect(graph, node, visiting, visited))
            {
                return true;
            }
        }

        return false;
    }

    private static bool Detect(Dictionary<string, List<string>> graph, string node, HashSet<string> visiting, HashSet<string> visited)
    {
        if (visited.Contains(node))
        {
            return false;
        }
        if (visiting.Contains(node))
        {
            return true;
        }

        visiting.Add(node);
        if (graph.TryGetValue(node, out var neighbors))
        {
            foreach (var neighbor in neighbors)
            {
                if (Detect(graph, neighbor, visiting, visited))
                {
                    return true;
                }
            }
        }

        visiting.Remove(node);
        visited.Add(node);
        return false;
    }
}
