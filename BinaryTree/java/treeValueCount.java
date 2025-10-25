class TreeValueCount {
  public static int treeValueCount(TreeNode root, int target) {
    if (root == null) {
      return 0;
    }
    int match = root.val == target ? 1 : 0;
    return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
  }

  public static void run() {
    // intentionally empty
  }
}
