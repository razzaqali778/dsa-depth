import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class GraphUtils {
  private GraphUtils() {
  }

  public static Map<String, List<String>> buildUndirectedGraph(List<String[]> edges) {
    Map<String, List<String>> graph = new HashMap<>();
    for (String[] edge : edges) {
      String a = edge[0];
      String b = edge[1];
      graph.computeIfAbsent(a, key -> new ArrayList<>()).add(b);
      graph.computeIfAbsent(b, key -> new ArrayList<>()).add(a);
    }
    return graph;
  }

  public static boolean inBounds(char[][] grid, int row, int col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
  }

  public static final int[][] DIRECTIONS = new int[][] {
      {-1, 0}, {1, 0}, {0, -1}, {0, 1}
  };
}
