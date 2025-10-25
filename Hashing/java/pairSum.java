import java.util.HashMap;
import java.util.Map;

class PairSum {
  public static int[] pairSum(int[] numbers, int targetSum) {
    Map<Integer, Integer> indices = new HashMap<>();
    for (int i = 0; i < numbers.length; i += 1) {
      int value = numbers[i];
      int difference = targetSum - value;
      if (indices.containsKey(difference)) {
        return new int[] { indices.get(difference), i };
      }
      indices.putIfAbsent(value, i);
    }
    throw new IllegalArgumentException("Pair not found");
  }

  public static void run() {
    // intentionally empty
  }
}
