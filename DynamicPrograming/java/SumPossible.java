import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class SumPossible {
  private SumPossible() {
  }

  public static boolean isPossible(int amount, List<Integer> numbers) {
    Map<Integer, Boolean> memo = new HashMap<>();
    return dfs(amount, numbers, memo);
  }

  private static boolean dfs(int remaining, List<Integer> numbers, Map<Integer, Boolean> memo) {
    if (remaining == 0) {
      return true;
    }
    if (remaining < 0) {
      return false;
    }
    if (memo.containsKey(remaining)) {
      return memo.get(remaining);
    }
    for (int num : numbers) {
      if (dfs(remaining - num, numbers, memo)) {
        memo.put(remaining, true);
        return true;
      }
    }
    memo.put(remaining, false);
    return false;
  }
}
