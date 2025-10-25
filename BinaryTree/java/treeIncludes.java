import java.util.ArrayDeque;
import java.util.Queue;

class TreeIncludes {
  public static boolean treeIncludes(TreeNode root, int target) {
    if (root == null) {
      return false;
    }

    Queue<TreeNode> queue = new ArrayDeque<>();
    queue.add(root);
    while (!queue.isEmpty()) {
      TreeNode current = queue.remove();
      if (current.val == target) {
        return true;
      }
      if (current.left != null) queue.add(current.left);
      if (current.right != null) queue.add(current.right);
    }

    return false;
  }

  public static void run() {
    // intentionally empty
  }
}
