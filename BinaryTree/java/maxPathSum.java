class MaxPathSum {
  public static int maxPathSum(TreeNode root) {
    if (root == null) {
      return Integer.MIN_VALUE;
    }
    if (root.left == null && root.right == null) {
      return root.val;
    }
    return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
  }

  public static void run() {
    // intentionally empty
  }
}
