import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SemestersRequired {
  public static int semesters(int numCourses, List<int[]> prereqs) {
    Map<Integer, List<Integer>> graph = new HashMap<>();
    for (int i = 0; i < numCourses; i++) {
      graph.put(i, new ArrayList<>());
    }
    for (int[] edge : prereqs) {
      graph.get(edge[0]).add(edge[1]);
    }

    Map<Integer, Integer> distance = new HashMap<>();
    for (Map.Entry<Integer, List<Integer>> entry : graph.entrySet()) {
      if (entry.getValue().isEmpty()) {
        distance.put(entry.getKey(), 1);
      }
    }

    int best = 0;
    for (int i = 0; i < numCourses; i++) {
      int value = traverse(graph, i, distance);
      if (value > best) {
        best = value;
      }
    }

    return best;
  }

  private static int traverse(Map<Integer, List<Integer>> graph, int node, Map<Integer, Integer> distance) {
    if (distance.containsKey(node)) {
      return distance.get(node);
    }

    int maxChild = 0;
    for (int neighbor : graph.get(node)) {
      int candidate = traverse(graph, neighbor, distance);
      if (candidate > maxChild) {
        maxChild = candidate;
      }
    }

    distance.put(node, maxChild + 1);
    return distance.get(node);
  }
}
