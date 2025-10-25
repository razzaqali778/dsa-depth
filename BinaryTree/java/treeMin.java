class TreeMin {
  public static int treeMin(TreeNode root) {
    if (root == null) {
      return Integer.MAX_VALUE;
    }
    return Math.min(root.val, Math.min(treeMin(root.left), treeMin(root.right)));
  }

  public static void run() {
    // intentionally empty
  }
}
