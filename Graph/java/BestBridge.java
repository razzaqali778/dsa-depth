import java.util.ArrayDeque;
import java.util.HashSet;
import java.util.Queue;
import java.util.Set;

public class BestBridge {
  public static int bestBridge(char[][] grid) {
    Set<String> firstIsland = new HashSet<>();

    outer:
    for (int r = 0; r < grid.length; r++) {
      for (int c = 0; c < grid[0].length; c++) {
        if (grid[r][c] == 'L') {
          collect(grid, r, c, firstIsland);
          if (!firstIsland.isEmpty()) {
            break outer;
          }
        }
      }
    }

    if (firstIsland.isEmpty()) {
      return 0;
    }

    Queue<int[]> queue = new ArrayDeque<>();
    Set<String> visited = new HashSet<>(firstIsland);

    for (String key : firstIsland) {
      String[] parts = key.split(",");
      int row = Integer.parseInt(parts[0]);
      int col = Integer.parseInt(parts[1]);
      queue.add(new int[] {row, col, 0});
    }

    while (!queue.isEmpty()) {
      int[] state = queue.poll();
      int row = state[0];
      int col = state[1];
      int distance = state[2];
      String key = row + "," + col;

      if (grid[row][col] == 'L' && !firstIsland.contains(key)) {
        return distance - 1;
      }

      for (int[] delta : GraphUtils.DIRECTIONS) {
        int nr = row + delta[0];
        int nc = col + delta[1];
        String neighborKey = nr + "," + nc;
        if (!GraphUtils.inBounds(grid, nr, nc) || visited.contains(neighborKey)) {
          continue;
        }
        visited.add(neighborKey);
        queue.add(new int[] {nr, nc, distance + 1});
      }
    }

    return -1;
  }

  private static void collect(char[][] grid, int row, int col, Set<String> island) {
    if (!GraphUtils.inBounds(grid, row, col) || grid[row][col] == 'W') {
      return;
    }

    String key = row + "," + col;
    if (!island.add(key)) {
      return;
    }

    for (int[] delta : GraphUtils.DIRECTIONS) {
      collect(grid, row + delta[0], col + delta[1], island);
    }
  }
}
