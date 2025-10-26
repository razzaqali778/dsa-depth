import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class QuickestConcat {
  private QuickestConcat() {
  }

  public static int quickest(String s, List<String> words) {
    Map<Integer, Integer> memo = new HashMap<>();
    int result = dfs(0, s, words, memo);
    return result >= Integer.MAX_VALUE / 2 ? -1 : result;
  }

  private static int dfs(int index, String s, List<String> words, Map<Integer, Integer> memo) {
    if (index == s.length()) {
      return 0;
    }
    if (memo.containsKey(index)) {
      return memo.get(index);
    }
    int best = Integer.MAX_VALUE / 2;
    for (String word : words) {
      if (s.startsWith(word, index)) {
        best = Math.min(best, 1 + dfs(index + word.length(), s, words, memo));
      }
    }
    memo.put(index, best);
    return best;
  }
}
