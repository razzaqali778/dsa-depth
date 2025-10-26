import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class UndirectedPath {
  public static boolean exists(List<String[]> edges, String src, String dst) {
    Map<String, List<String>> graph = GraphUtils.buildUndirectedGraph(edges);
    return dfs(graph, src, dst, new HashSet<>());
  }

  private static boolean dfs(Map<String, List<String>> graph, String node, String dst, Set<String> visited) {
    if (node.equals(dst)) {
      return true;
    }
    if (!visited.add(node)) {
      return false;
    }

    for (String neighbor : graph.getOrDefault(node, List.of())) {
      if (dfs(graph, neighbor, dst, visited)) {
        return true;
      }
    }

    return false;
  }
}
