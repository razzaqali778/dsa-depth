import java.util.HashMap;
import java.util.Map;

public final class MaxPalinSubsequence {
  private MaxPalinSubsequence() {
  }

  public static int longest(String s) {
    if (s.isEmpty()) {
      return 0;
    }
    Map<String, Integer> memo = new HashMap<>();
    return dfs(0, s.length() - 1, s, memo);
  }

  private static int dfs(int i, int j, String s, Map<String, Integer> memo) {
    if (i == j) {
      return 1;
    }
    if (i > j) {
      return 0;
    }
    String key = i + "," + j;
    if (memo.containsKey(key)) {
      return memo.get(key);
    }
    int result;
    if (s.charAt(i) == s.charAt(j)) {
      result = 2 + dfs(i + 1, j - 1, s, memo);
    } else {
      int left = dfs(i + 1, j, s, memo);
      int right = dfs(i, j - 1, s, memo);
      result = Math.max(left, right);
    }
    memo.put(key, result);
    return result;
  }
}
