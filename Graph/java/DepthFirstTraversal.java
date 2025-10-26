import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;
import java.util.HashSet;

public class DepthFirstTraversal {
  public static List<String> traverse(Map<String, List<String>> graph, String source) {
    List<String> order = new ArrayList<>();
    if (source == null || source.isEmpty()) {
      return order;
    }

    Stack<String> stack = new Stack<>();
    Set<String> visited = new HashSet<>();
    stack.push(source);

    while (!stack.isEmpty()) {
      String node = stack.pop();
      if (!visited.add(node)) {
        continue;
      }
      order.add(node);

      List<String> neighbors = graph.getOrDefault(node, List.of());
      for (int i = neighbors.size() - 1; i >= 0; i--) {
        stack.push(neighbors.get(i));
      }
    }

    return order;
  }
}
