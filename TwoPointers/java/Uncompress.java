public final class Uncompress {
  private Uncompress() {
  }

  public static String run(String s) {
    StringBuilder builder = new StringBuilder();
    int i = 0;

    while (i < s.length()) {
      int j = i;
      while (j < s.length() && Character.isDigit(s.charAt(j))) {
        j++;
      }
      int count = Integer.parseInt(s.substring(i, j));
      char ch = s.charAt(j);
      builder.append(String.valueOf(ch).repeat(count));
      i = j + 1;
    }

    return builder.toString();
  }
}
