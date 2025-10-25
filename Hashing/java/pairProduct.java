import java.util.HashMap;
import java.util.Map;

class PairProduct {
  public static int[] pairProduct(int[] numbers, int targetProduct) {
    Map<Integer, Integer> indices = new HashMap<>();

    for (int i = 0; i < numbers.length; i += 1) {
      int current = numbers[i];
      if (current == 0) {
        if (targetProduct == 0 && indices.containsKey(0)) {
          return new int[] { indices.get(0), i };
        }
        indices.putIfAbsent(0, i);
        continue;
      }

      if (targetProduct % current != 0) {
        indices.putIfAbsent(current, i);
        continue;
      }

      int complement = targetProduct / current;
      if (indices.containsKey(complement)) {
        return new int[] { indices.get(complement), i };
      }
      indices.putIfAbsent(current, i);
    }

    throw new IllegalArgumentException("Pair not found");
  }

  public static void run() {
    // intentionally empty
  }
}
