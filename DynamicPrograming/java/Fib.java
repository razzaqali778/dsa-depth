import java.util.HashMap;
import java.util.Map;

public final class Fib {
  private Fib() {
  }

  public static int fib(int n) {
    Map<Integer, Integer> memo = new HashMap<>();
    return helper(n, memo);
  }

  private static int helper(int n, Map<Integer, Integer> memo) {
    if (n == 0 || n == 1) {
      return n;
    }
    if (memo.containsKey(n)) {
      return memo.get(n);
    }
    int value = helper(n - 1, memo) + helper(n - 2, memo);
    memo.put(n, value);
    return value;
  }
}
