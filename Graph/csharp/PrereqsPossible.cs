using System.Collections.Generic;

namespace GraphSolutions;

public static class PrereqsPossible
{
    public static bool Solve(int numCourses, IEnumerable<(int, int)> prereqs)
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

        var visiting = new HashSet<int>();
        var visited = new HashSet<int>();

        for (var i = 0; i < numCourses; i++)
        {
            if (Detect(graph, i, visiting, visited))
            {
                return false;
            }
        }

        return true;
    }

    private static bool Detect(Dictionary<int, List<int>> graph, int node, HashSet<int> visiting, HashSet<int> visited)
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
        foreach (var neighbor in graph[node])
        {
            if (Detect(graph, neighbor, visiting, visited))
            {
                return true;
            }
        }

        visiting.Remove(node);
        visited.Add(node);
        return false;
    }
}
