import java.util.HashMap;
import java.util.Map;

public final class Tribonacci {
  private Tribonacci() {
  }

  public static int tribonacci(int n) {
    Map<Integer, Integer> memo = new HashMap<>();
    return helper(n, memo);
  }

  private static int helper(int n, Map<Integer, Integer> memo) {
    if (n == 0) {
      return 0;
    }
    if (n == 1 || n == 2) {
      return 1;
    }
    if (memo.containsKey(n)) {
      return memo.get(n);
    }
    int value = helper(n - 1, memo) + helper(n - 2, memo) + helper(n - 3, memo);
    memo.put(n, value);
    return value;
  }
}
