using System.Collections.Generic;

namespace GraphSolutions;

public static class DepthFirstTraversal
{
    public static IList<string> Solve(Dictionary<string, List<string>> graph, string source)
    {
        if (string.IsNullOrEmpty(source))
        {
            return new List<string>();
        }

        var order = new List<string>();
        var stack = new Stack<string>();
        var visited = new HashSet<string>();

        stack.Push(source);

        while (stack.Count > 0)
        {
            var node = stack.Pop();
            if (!visited.Add(node))
            {
                continue;
            }

            order.Add(node);

            if (!graph.TryGetValue(node, out var neighbors))
            {
                continue;
            }

            for (var i = neighbors.Count - 1; i >= 0; i--)
            {
                stack.Push(neighbors[i]);
            }
        }

        return order;
    }
}
