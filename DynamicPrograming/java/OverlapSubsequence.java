import java.util.HashMap;
import java.util.Map;

public final class OverlapSubsequence {
  private OverlapSubsequence() {
  }

  public static int length(String str1, String str2) {
    Map<String, Integer> memo = new HashMap<>();
    return dfs(0, 0, str1, str2, memo);
  }

  private static int dfs(int i, int j, String str1, String str2, Map<String, Integer> memo) {
    if (i == str1.length() || j == str2.length()) {
      return 0;
    }
    String key = i + "," + j;
    if (memo.containsKey(key)) {
      return memo.get(key);
    }
    int result;
    if (str1.charAt(i) == str2.charAt(j)) {
      result = 1 + dfs(i + 1, j + 1, str1, str2, memo);
    } else {
      result = Math.max(dfs(i + 1, j, str1, str2, memo), dfs(i, j + 1, str1, str2, memo));
    }
    memo.put(key, result);
    return result;
  }
}
