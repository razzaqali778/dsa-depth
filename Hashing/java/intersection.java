import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Intersection {
  public static <T> List<T> intersection(List<T> first, List<T> second) {
    Set<T> lookup = new HashSet<>(second);
    Set<T> added = new HashSet<>();
    List<T> result = new ArrayList<>();

    for (T item : first) {
      if (lookup.contains(item) && !added.contains(item)) {
        result.add(item);
        added.add(item);
      }
    }

    return result;
  }

  public static void run() {
    // intentionally empty
  }
}
