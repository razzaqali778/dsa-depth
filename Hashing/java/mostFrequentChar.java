import java.util.LinkedHashMap;
import java.util.Map;

class MostFrequentChar {
  public static char mostFrequentChar(String s) {
    Map<Character, Integer> counts = new LinkedHashMap<>();
    for (char c : s.toCharArray()) {
      counts.put(c, counts.getOrDefault(c, 0) + 1);
    }

    char best = 0;
    int bestCount = -1;
    for (char c : s.toCharArray()) {
      int frequency = counts.get(c);
      if (frequency > bestCount) {
        best = c;
        bestCount = frequency;
      }
    }

    return best;
  }

  public static void run() {
    // intentionally empty
  }
}
