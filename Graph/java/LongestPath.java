import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LongestPath {
  public static int longest(Map<String, List<String>> graph) {
    Map<String, Integer> distance = new HashMap<>();
    for (Map.Entry<String, List<String>> entry : graph.entrySet()) {
      if (entry.getValue().isEmpty()) {
        distance.put(entry.getKey(), 0);
      }
    }

    int best = 0;
    for (String node : graph.keySet()) {
      int value = traverse(graph, node, distance);
      if (value > best) {
        best = value;
      }
    }
    return best;
  }

  private static int traverse(Map<String, List<String>> graph, String node, Map<String, Integer> distance) {
    if (distance.containsKey(node)) {
      return distance.get(node);
    }

    int maxNeighbor = 0;
    for (String neighbor : graph.getOrDefault(node, List.of())) {
      int candidate = traverse(graph, neighbor, distance);
      if (candidate > maxNeighbor) {
        maxNeighbor = candidate;
      }
    }

    distance.put(node, maxNeighbor + 1);
    return distance.get(node);
  }
}
