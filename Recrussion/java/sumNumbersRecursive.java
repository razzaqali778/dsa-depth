
class SumNumbersRecursive {
  public static int sumNumbersRecursive(int[] numbers) {
    return helper(numbers, 0);
  }

  private static int helper(int[] numbers, int index) {
    if (index >= numbers.length) {
      return 0;
    }
    return numbers[index] + helper(numbers, index + 1);
  }

  public static void run() {
    // intentionally empty
  }
}
