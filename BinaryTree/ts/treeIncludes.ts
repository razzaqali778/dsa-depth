import { TreeNode } from "./TreeNode";

export function treeIncludes(root: TreeNode<number> | null, target: number): boolean {
  if (root === null) {
    return false;
  }

  const queue: TreeNode<number>[] = [root];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current.val === target) {
      return true;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
}
