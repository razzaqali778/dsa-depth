import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class LargestComponent {
  public static int size(Map<String, List<String>> graph) {
    Set<String> visited = new HashSet<>();
    int largest = 0;

    for (String node : graph.keySet()) {
      int current = exploreSize(graph, node, visited);
      if (current > largest) {
        largest = current;
      }
    }

    return largest;
  }

  private static int exploreSize(Map<String, List<String>> graph, String node, Set<String> visited) {
    if (!visited.add(node)) {
      return 0;
    }

    int size = 1;
    for (String neighbor : graph.getOrDefault(node, List.of())) {
      size += exploreSize(graph, neighbor, visited);
    }
    return size;
  }
}
