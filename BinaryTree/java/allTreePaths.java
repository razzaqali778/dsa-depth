import java.util.ArrayList;
import java.util.List;

class AllTreePaths {
  public static List<List<Integer>> allTreePaths(TreeNode root) {
    List<List<Integer>> paths = new ArrayList<>();
    if (root == null) {
      return paths;
    }
    traverse(root, new ArrayList<>(), paths);
    return paths;
  }

  private static void traverse(TreeNode node, List<Integer> current, List<List<Integer>> paths) {
    if (node == null) {
      return;
    }

    current.add(node.val);
    if (node.left == null && node.right == null) {
      paths.add(new ArrayList<>(current));
    } else {
      traverse(node.left, current, paths);
      traverse(node.right, current, paths);
    }
    current.remove(current.size() - 1);
  }

  public static void run() {
    // intentionally empty
  }
}
