import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class MinChange {
  private MinChange() {
  }

  public static int minCoins(int amount, List<Integer> coins) {
    Map<Integer, Integer> memo = new HashMap<>();
    int answer = dfs(amount, coins, memo);
    return answer >= Integer.MAX_VALUE / 2 ? -1 : answer;
  }

  private static int dfs(int remaining, List<Integer> coins, Map<Integer, Integer> memo) {
    if (remaining < 0) {
      return Integer.MAX_VALUE / 2;
    }
    if (remaining == 0) {
      return 0;
    }
    if (memo.containsKey(remaining)) {
      return memo.get(remaining);
    }
    int best = Integer.MAX_VALUE / 2;
    for (int coin : coins) {
      best = Math.min(best, 1 + dfs(remaining - coin, coins, memo));
    }
    memo.put(remaining, best);
    return best;
  }
}
