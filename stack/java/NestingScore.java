import java.util.ArrayDeque;
import java.util.Deque;

public final class NestingScore {
  private NestingScore() {
  }

  public static int score(String brackets) {
    Deque<Integer> stack = new ArrayDeque<>();
    stack.push(0);
    for (char ch : brackets.toCharArray()) {
      if (ch == '[') {
        stack.push(0);
      } else {
        int top = stack.pop();
        int value = top == 0 ? 1 : 2 * top;
        int updated = stack.pop() + value;
        stack.push(updated);
      }
    }
    return stack.peek();
  }
}
