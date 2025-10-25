
class Palindrome {
  public static boolean palindrome(String input) {
    return isPalindrome(input, 0, input.length() - 1);
  }

  private static boolean isPalindrome(String input, int left, int right) {
    if (left >= right) {
      return true;
    }

    if (input.charAt(left) != input.charAt(right)) {
      return false;
    }

    return isPalindrome(input, left + 1, right - 1);
  }

  public static void run() {
    // intentionally empty
  }
}
