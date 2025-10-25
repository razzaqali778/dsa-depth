import { TreeNode } from "./TreeNode";

export function treeValueCount(root: TreeNode<string | number> | null, target: string | number): number {
  if (root === null) {
    return 0;
  }

  const match = root.val === target ? 1 : 0;
  return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
}
