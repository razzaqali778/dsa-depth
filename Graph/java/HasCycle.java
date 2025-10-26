import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class HasCycle {
  public static boolean detect(Map<String, List<String>> graph) {
    Set<String> visiting = new HashSet<>();
    Set<String> visited = new HashSet<>();

    for (String node : graph.keySet()) {
      if (cycle(graph, node, visiting, visited)) {
        return true;
      }
    }

    return false;
  }

  private static boolean cycle(Map<String, List<String>> graph, String node, Set<String> visiting, Set<String> visited) {
    if (visited.contains(node)) {
      return false;
    }
    if (visiting.contains(node)) {
      return true;
    }

    visiting.add(node);
    for (String neighbor : graph.getOrDefault(node, List.of())) {
      if (cycle(graph, neighbor, visiting, visited)) {
        return true;
      }
    }

    visiting.remove(node);
    visited.add(node);
    return false;
  }
}
