import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class PrereqsPossible {
  public static boolean possible(int numCourses, List<int[]> prereqs) {
    Map<Integer, List<Integer>> graph = new HashMap<>();
    for (int i = 0; i < numCourses; i++) {
      graph.put(i, new ArrayList<>());
    }
    for (int[] edge : prereqs) {
      graph.get(edge[0]).add(edge[1]);
    }

    Set<Integer> visiting = new HashSet<>();
    Set<Integer> visited = new HashSet<>();

    for (int i = 0; i < numCourses; i++) {
      if (cycle(graph, i, visiting, visited)) {
        return false;
      }
    }

    return true;
  }

  private static boolean cycle(Map<Integer, List<Integer>> graph, int node, Set<Integer> visiting, Set<Integer> visited) {
    if (visited.contains(node)) {
      return false;
    }
    if (visiting.contains(node)) {
      return true;
    }

    visiting.add(node);
    for (int neighbor : graph.get(node)) {
      if (cycle(graph, neighbor, visiting, visited)) {
        return true;
      }
    }

    visiting.remove(node);
    visited.add(node);
    return false;
  }
}
