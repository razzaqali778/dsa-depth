using System.Collections.Generic;

namespace GraphSolutions;

public static class ShortestPath
{
    public static int Solve(IEnumerable<(string, string)> edges, string nodeA, string nodeB)
    {
        var graph = GraphUtils.BuildUndirectedGraph(edges);
        var queue = new Queue<(string Node, int Distance)>();
        var visited = new HashSet<string> { nodeA };

        queue.Enqueue((nodeA, 0));

        while (queue.Count > 0)
        {
            var (node, distance) = queue.Dequeue();
            if (node == nodeB)
            {
                return distance;
            }

            if (!graph.TryGetValue(node, out var neighbors))
            {
                continue;
            }

            foreach (var neighbor in neighbors)
            {
                if (visited.Add(neighbor))
                {
                    queue.Enqueue((neighbor, distance + 1));
                }
            }
        }

        return -1;
    }
}
