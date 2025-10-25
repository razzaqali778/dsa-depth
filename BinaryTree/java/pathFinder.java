import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class PathFinder {
  public static List<Integer> pathFinder(TreeNode root, int target) {
    List<Integer> path = buildPath(root, target);
    if (path == null) {
      return null;
    }
    Collections.reverse(path);
    return path;
  }

  private static List<Integer> buildPath(TreeNode node, int target) {
    if (node == null) {
      return null;
    }
    if (node.val == target) {
      List<Integer> base = new ArrayList<>();
      base.add(node.val);
      return base;
    }

    List<Integer> leftPath = buildPath(node.left, target);
    if (leftPath != null) {
      leftPath.add(node.val);
      return leftPath;
    }

    List<Integer> rightPath = buildPath(node.right, target);
    if (rightPath != null) {
      rightPath.add(node.val);
      return rightPath;
    }

    return null;
  }

  public static void run() {
    // intentionally empty
  }
}
