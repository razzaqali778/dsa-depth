using System.Collections.Generic;

namespace GraphSolutions;

public static class LongestPath
{
    public static int Solve(Dictionary<string, List<string>> graph)
    {
        var distance = new Dictionary<string, int>();
        foreach (var (node, neighbors) in graph)
        {
            if (neighbors.Count == 0)
            {
                distance[node] = 0;
            }
        }

        var maxLength = 0;
        foreach (var node in graph.Keys)
        {
            var value = Traverse(graph, node, distance);
            if (value > maxLength)
            {
                maxLength = value;
            }
        }

        return maxLength;
    }

    private static int Traverse(Dictionary<string, List<string>> graph, string node, Dictionary<string, int> distance)
    {
        if (distance.TryGetValue(node, out var cached))
        {
            return cached;
        }

        var maxNeighbor = 0;
        if (graph.TryGetValue(node, out var neighbors))
        {
            foreach (var neighbor in neighbors)
            {
                var candidate = Traverse(graph, neighbor, distance);
                if (candidate > maxNeighbor)
                {
                    maxNeighbor = candidate;
                }
            }
        }

        distance[node] = maxNeighbor + 1;
        return distance[node];
    }
}
