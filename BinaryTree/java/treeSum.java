class TreeSum {
  public static int treeSum(TreeNode root) {
    if (root == null) {
      return 0;
    }
    return root.val + treeSum(root.left) + treeSum(root.right);
  }

  public static void run() {
    // intentionally empty
  }
}
