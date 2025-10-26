import java.util.HashMap;
import java.util.Map;

public final class MaxPathSum {
  private MaxPathSum() {
  }

  public static int maxSum(int[][] grid) {
    int rows = grid.length;
    if (rows == 0) {
      return 0;
    }
    int cols = grid[0].length;
    Map<String, Integer> memo = new HashMap<>();
    return dfs(0, 0, grid, rows, cols, memo);
  }

  private static int dfs(int r, int c, int[][] grid, int rows, int cols, Map<String, Integer> memo) {
    if (r == rows || c == cols) {
      return Integer.MIN_VALUE / 2;
    }
    if (r == rows - 1 && c == cols - 1) {
      return grid[r][c];
    }
    String key = r + "," + c;
    if (memo.containsKey(key)) {
      return memo.get(key);
    }
    int down = dfs(r + 1, c, grid, rows, cols, memo);
    int right = dfs(r, c + 1, grid, rows, cols, memo);
    int best = grid[r][c] + Math.max(down, right);
    memo.put(key, best);
    return best;
  }
}
