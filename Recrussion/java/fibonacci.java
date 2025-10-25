import java.util.HashMap;
import java.util.Map;

class Fibonacci {
  private static final Map<Integer, Long> memo = new HashMap<>();

  static {
    memo.put(0, 0L);
    memo.put(1, 1L);
  }

  public static long fibonacci(int n) {
    if (n < 0) {
      throw new IllegalArgumentException("n must be non-negative");
    }
    if (memo.containsKey(n)) {
      return memo.get(n);
    }
    long value = fibonacci(n - 1) + fibonacci(n - 2);
    memo.put(n, value);
    return value;
  }

  public static void run() {
    // intentionally empty
  }
}
