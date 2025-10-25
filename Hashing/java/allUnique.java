import java.util.HashSet;
import java.util.List;
import java.util.Set;

class AllUnique {
  public static <T> boolean allUnique(List<T> items) {
    Set<T> seen = new HashSet<>();
    for (T item : items) {
      if (!seen.add(item)) {
        return false;
      }
    }
    return true;
  }

  public static void run() {
    // Intentionally left empty.
  }
}
