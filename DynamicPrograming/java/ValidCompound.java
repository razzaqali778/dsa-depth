import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public final class ValidCompound {
  private ValidCompound() {
  }

  public static boolean isValid(String compound, List<String> elements) {
    String lowerCompound = compound.toLowerCase(Locale.ROOT);
    List<String> lowerElements = new ArrayList<>();
    for (String element : elements) {
      lowerElements.add(element.toLowerCase(Locale.ROOT));
    }
    Map<Integer, Boolean> memo = new HashMap<>();
    return dfs(0, lowerCompound, lowerElements, memo);
  }

  private static boolean dfs(int index, String compound, List<String> elements, Map<Integer, Boolean> memo) {
    if (index == compound.length()) {
      return true;
    }
    if (memo.containsKey(index)) {
      return memo.get(index);
    }
    for (String element : elements) {
      if (compound.startsWith(element, index) && dfs(index + element.length(), compound, elements, memo)) {
        memo.put(index, true);
        return true;
      }
    }
    memo.put(index, false);
    return false;
  }
}
