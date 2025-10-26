import java.util.HashSet;
import java.util.Set;

public class MinimumIsland {
  public static int size(char[][] grid) {
    Set<String> visited = new HashSet<>();
    int min = Integer.MAX_VALUE;

    for (int r = 0; r < grid.length; r++) {
      for (int c = 0; c < grid[0].length; c++) {
        int current = measure(grid, r, c, visited);
        if (current > 0 && current < min) {
          min = current;
        }
      }
    }

    return min == Integer.MAX_VALUE ? 0 : min;
  }

  private static int measure(char[][] grid, int row, int col, Set<String> visited) {
    if (!GraphUtils.inBounds(grid, row, col) || grid[row][col] == 'W') {
      return 0;
    }

    String key = row + "," + col;
    if (!visited.add(key)) {
      return 0;
    }

    int size = 1;
    for (int[] delta : GraphUtils.DIRECTIONS) {
      size += measure(grid, row + delta[0], col + delta[1], visited);
    }
    return size;
  }
}
