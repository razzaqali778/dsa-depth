import java.util.ArrayDeque;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class ShortestPath {
  public static int shortest(List<String[]> edges, String nodeA, String nodeB) {
    Map<String, List<String>> graph = GraphUtils.buildUndirectedGraph(edges);
    Queue<NodeDistance> queue = new ArrayDeque<>();
    Set<String> visited = new HashSet<>();
    queue.add(new NodeDistance(nodeA, 0));
    visited.add(nodeA);

    while (!queue.isEmpty()) {
      NodeDistance nd = queue.poll();
      if (nd.node().equals(nodeB)) {
        return nd.distance();
      }

      for (String neighbor : graph.getOrDefault(nd.node(), List.of())) {
        if (visited.add(neighbor)) {
          queue.add(new NodeDistance(neighbor, nd.distance() + 1));
        }
      }
    }

    return -1;
  }

  private record NodeDistance(String node, int distance) {}
}
