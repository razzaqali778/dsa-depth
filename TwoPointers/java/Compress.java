public final class Compress {
  private Compress() {
  }

  public static String run(String s) {
    if (s.isEmpty()) {
      return "";
    }

    StringBuilder builder = new StringBuilder();
    int i = 0;
    while (i < s.length()) {
      int j = i + 1;
      while (j < s.length() && s.charAt(j) == s.charAt(i)) {
        j++;
      }
      int count = j - i;
      if (count == 1) {
        builder.append(s.charAt(i));
      } else {
        builder.append(count).append(s.charAt(i));
      }
      i = j;
    }

    return builder.toString();
  }
}
