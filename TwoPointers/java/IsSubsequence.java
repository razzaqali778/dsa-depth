public final class IsSubsequence {
  private IsSubsequence() {
  }

  public static boolean check(String target, String source) {
    int i = 0;
    int j = 0;

    while (i < target.length() && j < source.length()) {
      if (target.charAt(i) == source.charAt(j)) {
        i++;
      }
      j++;
    }

    return i == target.length();
  }
}
