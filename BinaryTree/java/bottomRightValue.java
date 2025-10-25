import java.util.ArrayDeque;
import java.util.Queue;

class BottomRightValue {
  public static int bottomRightValue(TreeNode root) {
    if (root == null) {
      throw new IllegalArgumentException("root cannot be null");
    }
    Queue<TreeNode> queue = new ArrayDeque<>();
    queue.add(root);
    TreeNode current = root;

    while (!queue.isEmpty()) {
      current = queue.remove();
      if (current.left != null) queue.add(current.left);
      if (current.right != null) queue.add(current.right);
    }

    return current.val;
  }

  public static void run() {
    // intentionally empty
  }
}
