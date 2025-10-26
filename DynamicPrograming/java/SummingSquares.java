import java.util.HashMap;
import java.util.Map;

public final class SummingSquares {
  private SummingSquares() {
  }

  public static int minSquares(int n) {
    Map<Integer, Integer> memo = new HashMap<>();
    return dfs(n, memo);
  }

  private static int dfs(int value, Map<Integer, Integer> memo) {
    if (value == 0) {
      return 0;
    }
    if (memo.containsKey(value)) {
      return memo.get(value);
    }
    int best = Integer.MAX_VALUE / 2;
    for (int i = 1; i * i <= value; i++) {
      best = Math.min(best, 1 + dfs(value - i * i, memo));
    }
    memo.put(value, best);
    return best;
  }
}
