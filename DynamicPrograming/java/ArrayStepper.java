import java.util.HashMap;
import java.util.Map;

public final class ArrayStepper {
  private ArrayStepper() {
  }

  public static boolean canReach(int[] numbers) {
    if (numbers.length == 0) {
      return true;
    }
    Map<Integer, Boolean> memo = new HashMap<>();
    return dfs(0, numbers, memo);
  }

  private static boolean dfs(int index, int[] numbers, Map<Integer, Boolean> memo) {
    if (index >= numbers.length - 1) {
      return true;
    }
    if (memo.containsKey(index)) {
      return memo.get(index);
    }

    int maxStep = numbers[index];
    for (int step = 1; step <= maxStep; step++) {
      if (dfs(index + step, numbers, memo)) {
        memo.put(index, true);
        return true;
      }
    }

    memo.put(index, false);
    return false;
  }
}
