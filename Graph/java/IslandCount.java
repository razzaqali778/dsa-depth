import java.util.HashSet;
import java.util.Set;

public class IslandCount {
  public static int count(char[][] grid) {
    Set<String> visited = new HashSet<>();
    int total = 0;

    for (int r = 0; r < grid.length; r++) {
      for (int c = 0; c < grid[0].length; c++) {
        if (explore(grid, r, c, visited)) {
          total++;
        }
      }
    }

    return total;
  }

  private static boolean explore(char[][] grid, int row, int col, Set<String> visited) {
    if (!GraphUtils.inBounds(grid, row, col) || grid[row][col] == 'W') {
      return false;
    }

    String key = row + "," + col;
    if (!visited.add(key)) {
      return false;
    }

    for (int[] delta : GraphUtils.DIRECTIONS) {
      explore(grid, row + delta[0], col + delta[1], visited);
    }

    return true;
  }
}
