import { TreeNode } from "./TreeNode";

export function howHigh(root: TreeNode<number> | null): number {
  if (root === null) {
    return -1;
  }
  return 1 + Math.max(howHigh(root.left), howHigh(root.right));
}
