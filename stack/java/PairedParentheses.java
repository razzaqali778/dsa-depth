public final class PairedParentheses {
  private PairedParentheses() {
  }

  public static boolean isBalanced(String s) {
    int balance = 0;
    for (char ch : s.toCharArray()) {
      if (ch == '(') {
        balance++;
      } else if (ch == ')') {
        balance--;
        if (balance < 0) {
          return false;
        }
      }
    }
    return balance == 0;
  }
}
