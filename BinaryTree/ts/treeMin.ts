import { TreeNode } from "./TreeNode";

export function treeMin(root: TreeNode<number> | null): number {
  if (root === null) {
    return Infinity;
  }
  return Math.min(root.val, treeMin(root.left), treeMin(root.right));
}
