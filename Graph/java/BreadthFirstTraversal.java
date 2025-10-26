import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class BreadthFirstTraversal {
  public static List<String> traverse(Map<String, List<String>> graph, String source) {
    List<String> order = new ArrayList<>();
    if (source == null || source.isEmpty()) {
      return order;
    }

    Queue<String> queue = new ArrayDeque<>();
    Set<String> visited = new HashSet<>();

    queue.add(source);
    visited.add(source);

    while (!queue.isEmpty()) {
      String node = queue.poll();
      order.add(node);

      for (String neighbor : graph.getOrDefault(node, List.of())) {
        if (visited.add(neighbor)) {
          queue.add(neighbor);
        }
      }
    }

    return order;
  }
}
