import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Set;

public final class ReverseSomeChars {
  private ReverseSomeChars() {
  }

  public static String reverse(String s, Set<Character> chars) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char ch : s.toCharArray()) {
      if (chars.contains(ch)) {
        stack.push(ch);
      }
    }

    StringBuilder result = new StringBuilder(s.length());
    for (char ch : s.toCharArray()) {
      if (chars.contains(ch)) {
        result.append(stack.pop());
      } else {
        result.append(ch);
      }
    }

    return result.toString();
  }
}
