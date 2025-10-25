import { TreeNode } from "./TreeNode";

export function bottomRightValue(root: TreeNode<number>): number {
  const queue: TreeNode<number>[] = [root];
  let current: TreeNode<number> = root;

  while (queue.length > 0) {
    current = queue.shift()!;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return current.val;
}
