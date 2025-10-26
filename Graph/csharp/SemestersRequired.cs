using System.Collections.Generic;

namespace GraphSolutions;

public static class SemestersRequired
{
    public static int Solve(int numCourses, IEnumerable<(int, int)> prereqs)
    {
        var graph = new Dictionary<int, List<int>>();
        for (var i = 0; i < numCourses; i++)
        {
            graph[i] = new List<int>();
        }

        foreach (var (a, b) in prereqs)
        {
            graph[a].Add(b);
        }

        var distance = new Dictionary<int, int>();
        foreach (var (node, neighbors) in graph)
        {
            if (neighbors.Count == 0)
            {
                distance[node] = 1;
            }
        }

        var maxSemester = 0;
        for (var i = 0; i < numCourses; i++)
        {
            var value = Traverse(graph, i, distance);
            if (value > maxSemester)
            {
                maxSemester = value;
            }
        }

        return maxSemester;
    }

    private static int Traverse(Dictionary<int, List<int>> graph, int node, Dictionary<int, int> distance)
    {
        if (distance.TryGetValue(node, out var cached))
        {
            return cached;
        }

        var maxChild = 0;
        foreach (var neighbor in graph[node])
        {
            var candidate = Traverse(graph, neighbor, distance);
            if (candidate > maxChild)
            {
                maxChild = candidate;
            }
        }

        distance[node] = maxChild + 1;
        return distance[node];
    }
}
