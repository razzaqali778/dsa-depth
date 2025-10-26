using System.Collections.Generic;

namespace GraphSolutions;

public static class LargestComponent
{
    public static int Solve(Dictionary<string, List<string>> graph)
    {
        var visited = new HashSet<string>();
        var largest = 0;

        foreach (var node in graph.Keys)
        {
            var size = ExploreSize(graph, node, visited);
            if (size > largest)
            {
                largest = size;
            }
        }

        return largest;
    }

    private static int ExploreSize(Dictionary<string, List<string>> graph, string node, HashSet<string> visited)
    {
        if (!visited.Add(node))
        {
            return 0;
        }

        if (!graph.TryGetValue(node, out var neighbors))
        {
            return 1;
        }

        var size = 1;
        foreach (var neighbor in neighbors)
        {
            size += ExploreSize(graph, neighbor, visited);
        }

        return size;
    }
}
