import { TreeNode } from "./TreeNode";

export function maxPathSum(root: TreeNode<number> | null): number {
  if (root === null) {
    return Number.NEGATIVE_INFINITY;
  }
  if (root.left === null && root.right === null) {
    return root.val;
  }
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
}
