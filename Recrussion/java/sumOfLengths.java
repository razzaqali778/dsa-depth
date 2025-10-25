class SumOfLengths {
  public static int sumOfLengths(String[] words) {
    return helper(words, 0);
  }

  private static int helper(String[] words, int index) {
    if (index >= words.length) {
      return 0;
    }
    return words[index].length() + helper(words, index + 1);
  }

  public static void run() {
    // intentionally empty
  }
}
