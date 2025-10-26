import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class NonAdjacentSum {
  private NonAdjacentSum() {
  }

  public static int maxSum(List<Integer> nums) {
    Map<Integer, Integer> memo = new HashMap<>();
    return dfs(0, nums, memo);
  }

  private static int dfs(int index, List<Integer> nums, Map<Integer, Integer> memo) {
    if (index >= nums.size()) {
      return 0;
    }
    if (memo.containsKey(index)) {
      return memo.get(index);
    }
    int include = nums.get(index) + dfs(index + 2, nums, memo);
    int exclude = dfs(index + 1, nums, memo);
    int best = Math.max(include, exclude);
    memo.put(index, best);
    return best;
  }
}
