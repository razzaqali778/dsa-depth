import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class CountingChange {
  private CountingChange() {
  }

  public static int countWays(int amount, List<Integer> coins) {
    Map<String, Integer> memo = new HashMap<>();
    return dfs(amount, 0, coins, memo);
  }

  private static int dfs(int remaining, int index, List<Integer> coins, Map<String, Integer> memo) {
    String key = remaining + "," + index;
    if (memo.containsKey(key)) {
      return memo.get(key);
    }
    if (remaining == 0) {
      return 1;
    }
    if (index == coins.size()) {
      return 0;
    }

    int coin = coins.get(index);
    int ways = 0;
    for (int qty = 0; qty * coin <= remaining; qty++) {
      ways += dfs(remaining - qty * coin, index + 1, coins, memo);
    }

    memo.put(key, ways);
    return ways;
  }
}
