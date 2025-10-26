import java.util.ArrayDeque;
import java.util.Deque;

public final class DecompressBraces {
  private DecompressBraces() {
  }

  public static String run(String input) {
    Deque<String> stack = new ArrayDeque<>();
    for (char ch : input.toCharArray()) {
      if (Character.isDigit(ch)) {
        stack.push(String.valueOf(ch));
      } else if (ch == '{') {
        continue;
      } else if (ch == '}') {
        StringBuilder segment = new StringBuilder();
        while (!stack.isEmpty() && !isNumber(stack.peek())) {
          segment.insert(0, stack.pop());
        }
        int count = Integer.parseInt(stack.pop());
        stack.push(segment.toString().repeat(count));
      } else {
        stack.push(String.valueOf(ch));
      }
    }
    StringBuilder result = new StringBuilder();
    for (String part : stack.descendingIterator()) {
      result.append(part);
    }
    return result.toString();
  }

  private static boolean isNumber(String value) {
    return value.length() == 1 && Character.isDigit(value.charAt(0));
  }
}
