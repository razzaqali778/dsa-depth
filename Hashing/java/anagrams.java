import java.util.HashMap;

class Source {
  public static HashMap<Character, Integer> charCount(String s) {
    HashMap<Character, Integer> count = new HashMap<Character, Integer>();
    for (char c : s.toCharArray()) {
      if (count.get(c) == null) {
        count.put(c, 0);
      }
      int current = count.get(c);
      count.put(c, current + 1);
    }
    return count;
  }

  public static boolean anagrams(String s1, String s2) {
    return charCount(s1).equals(charCount(s2));
  }

  public static void run() {
    // this function behaves as `main()` for the 'run' command
    // you may sandbox in this function, but should not remove it
  }
}
