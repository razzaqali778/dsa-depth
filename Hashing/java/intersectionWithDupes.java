import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class IntersectionWithDupes {
  public static <T> List<T> intersectionWithDupes(List<T> first, List<T> second) {
    Map<T, Integer> counts = new HashMap<>();
    for (T item : first) {
      counts.put(item, counts.getOrDefault(item, 0) + 1);
    }

    List<T> result = new ArrayList<>();
    for (T item : second) {
      int remaining = counts.getOrDefault(item, 0);
      if (remaining > 0) {
        result.add(item);
        counts.put(item, remaining - 1);
      }
    }

    return result;
  }

  public static void run() {
    // intentionally empty
  }
}
