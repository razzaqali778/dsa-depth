import { TreeNode } from "./TreeNode";

export function treeSum(root: TreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }
  return root.val + treeSum(root.left) + treeSum(root.right);
}
