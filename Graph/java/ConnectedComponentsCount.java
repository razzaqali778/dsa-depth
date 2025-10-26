import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class ConnectedComponentsCount {
  public static int count(Map<String, List<String>> graph) {
    Set<String> visited = new HashSet<>();
    int total = 0;

    for (String node : graph.keySet()) {
      if (explore(graph, node, visited)) {
        total++;
      }
    }

    return total;
  }

  private static boolean explore(Map<String, List<String>> graph, String node, Set<String> visited) {
    if (!visited.add(node)) {
      return false;
    }

    for (String neighbor : graph.getOrDefault(node, List.of())) {
      explore(graph, neighbor, visited);
    }

    return true;
  }
}
