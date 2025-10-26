import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class CanConcat {
  private CanConcat() {
  }

  public static boolean canConcat(String s, List<String> words) {
    Map<Integer, Boolean> memo = new HashMap<>();
    return dfs(0, s, words, memo);
  }

  private static boolean dfs(int index, String s, List<String> words, Map<Integer, Boolean> memo) {
    if (index == s.length()) {
      return true;
    }
    if (memo.containsKey(index)) {
      return memo.get(index);
    }

    for (String word : words) {
      if (s.startsWith(word, index) && dfs(index + word.length(), s, words, memo)) {
        memo.put(index, true);
        return true;
      }
    }

    memo.put(index, false);
    return false;
  }
}
