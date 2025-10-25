import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

class DepthFirstValues {
  public static List<Integer> depthFirstValues(TreeNode root) {
    List<Integer> values = new ArrayList<>();
    if (root == null) {
      return values;
    }

    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);
    while (!stack.isEmpty()) {
      TreeNode current = stack.pop();
      values.add(current.val);
      if (current.right != null) stack.push(current.right);
      if (current.left != null) stack.push(current.left);
    }

    return values;
  }

  public static void run() {
    // intentionally empty
  }
}
