using System.Collections.Generic;

namespace GraphSolutions;

public static class BreadthFirstTraversal
{
    public static IList<string> Solve(Dictionary<string, List<string>> graph, string source)
    {
        if (string.IsNullOrEmpty(source))
        {
            return new List<string>();
        }

        var order = new List<string>();
        var queue = new Queue<string>();
        var visited = new HashSet<string>();

        queue.Enqueue(source);
        visited.Add(source);

        while (queue.Count > 0)
        {
            var node = queue.Dequeue();
            order.Add(node);

            if (!graph.TryGetValue(node, out var neighbors))
            {
                continue;
            }

            foreach (var neighbor in neighbors)
            {
                if (visited.Add(neighbor))
                {
                    queue.Enqueue(neighbor);
                }
            }
        }

        return order;
    }
}
