import java.util.ArrayDeque;
import java.util.Deque;

public final class BefittingBrackets {
  private BefittingBrackets() {
  }

  public static boolean check(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char ch : s.toCharArray()) {
      if (ch == '(' || ch == '[' || ch == '{') {
        stack.push(ch);
      } else if (ch == ')' || ch == ']' || ch == '}') {
        if (stack.isEmpty() || stack.pop() != matching(ch)) {
          return false;
        }
      }
    }
    return stack.isEmpty();
  }

  private static char matching(char closing) {
    return switch (closing) {
      case ')' -> '(';
      case ']' -> '[';
      case '}' -> '{';
      default -> '?';
    };
  }
}
