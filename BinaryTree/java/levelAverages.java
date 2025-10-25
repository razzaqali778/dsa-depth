import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

class LevelAverages {
  public static List<Double> levelAverages(TreeNode root) {
    List<Double> result = new ArrayList<>();
    if (root == null) {
      return result;
    }

    Queue<TreeNode> queue = new ArrayDeque<>();
    queue.add(root);

    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      double sum = 0;
      for (int i = 0; i < levelSize; i += 1) {
        TreeNode current = queue.remove();
        sum += current.val;
        if (current.left != null) queue.add(current.left);
        if (current.right != null) queue.add(current.right);
      }
      result.add(sum / levelSize);
    }

    return result;
  }

  public static void run() {
    // intentionally empty
  }
}
