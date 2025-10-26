import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public final class CountCompounds {
  private CountCompounds() {
  }

  public static int count(String compound, List<String> elements) {
    String lowerCompound = compound.toLowerCase(Locale.ROOT);
    List<String> lowerElements = new ArrayList<>();
    for (String element : elements) {
      lowerElements.add(element.toLowerCase(Locale.ROOT));
    }
    Map<Integer, Integer> memo = new HashMap<>();
    return dfs(0, lowerCompound, lowerElements, memo);
  }

  private static int dfs(int index, String compound, List<String> elements, Map<Integer, Integer> memo) {
    if (index == compound.length()) {
      return 1;
    }
    if (memo.containsKey(index)) {
      return memo.get(index);
    }

    int total = 0;
    for (String element : elements) {
      if (compound.startsWith(element, index)) {
        total += dfs(index + element.length(), compound, elements, memo);
      }
    }

    memo.put(index, total);
    return total;
  }
}
