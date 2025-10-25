import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

class BreadthFirstValues {
  public static List<Integer> breadthFirstValues(TreeNode root) {
    List<Integer> values = new ArrayList<>();
    if (root == null) {
      return values;
    }

    Queue<TreeNode> queue = new ArrayDeque<>();
    queue.add(root);

    while (!queue.isEmpty()) {
      TreeNode current = queue.remove();
      values.add(current.val);
      if (current.left != null) queue.add(current.left);
      if (current.right != null) queue.add(current.right);
    }

    return values;
  }

  public static void run() {
    // intentionally empty
  }
}
