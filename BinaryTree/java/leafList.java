import java.util.ArrayList;
import java.util.List;

class LeafList {
  public static List<Integer> leafList(TreeNode root) {
    List<Integer> leaves = new ArrayList<>();
    collect(root, leaves);
    return leaves;
  }

  private static void collect(TreeNode node, List<Integer> leaves) {
    if (node == null) {
      return;
    }
    if (node.left == null && node.right == null) {
      leaves.add(node.val);
      return;
    }
    collect(node.left, leaves);
    collect(node.right, leaves);
  }

  public static void run() {
    // intentionally empty
  }
}
