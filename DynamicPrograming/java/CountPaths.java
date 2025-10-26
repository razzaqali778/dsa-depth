import java.util.HashMap;
import java.util.Map;

public final class CountPaths {
  private CountPaths() {
  }

  public static int count(String[][] grid) {
    int rows = grid.length;
    int cols = rows == 0 ? 0 : grid[0].length;
    Map<String, Integer> memo = new HashMap<>();
    return dfs(0, 0, grid, rows, cols, memo);
  }

  private static int dfs(int r, int c, String[][] grid, int rows, int cols, Map<String, Integer> memo) {
    if (r >= rows || c >= cols || grid[r][c].equals("X")) {
      return 0;
    }
    if (r == rows - 1 && c == cols - 1) {
      return 1;
    }
    String key = r + "," + c;
    if (memo.containsKey(key)) {
      return memo.get(key);
    }
    int paths = dfs(r + 1, c, grid, rows, cols, memo) + dfs(r, c + 1, grid, rows, cols, memo);
    memo.put(key, paths);
    return paths;
  }
}
