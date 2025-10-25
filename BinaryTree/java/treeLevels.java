import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

class TreeLevels {
  public static List<List<Integer>> treeLevels(TreeNode root) {
    List<List<Integer>> levels = new ArrayList<>();
    if (root == null) {
      return levels;
    }

    Queue<TreeNode> queue = new ArrayDeque<>();
    queue.add(root);

    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      List<Integer> level = new ArrayList<>();
      for (int i = 0; i < levelSize; i += 1) {
        TreeNode current = queue.remove();
        level.add(current.val);
        if (current.left != null) queue.add(current.left);
        if (current.right != null) queue.add(current.right);
      }
      levels.add(level);
    }

    return levels;
  }

  public static void run() {
    // intentionally empty
  }
}
