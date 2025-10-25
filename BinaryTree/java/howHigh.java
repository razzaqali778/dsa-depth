class HowHigh {
  public static int howHigh(TreeNode root) {
    if (root == null) {
      return -1;
    }
    return 1 + Math.max(howHigh(root.left), howHigh(root.right));
  }

  public static void run() {
    // intentionally empty
  }
}
