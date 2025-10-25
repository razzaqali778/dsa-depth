import { TreeNode } from "./TreeNode";

export function breadthFirstValues(root: TreeNode<number> | null): number[] {
  if (root === null) {
    return [];
  }

  const queue: TreeNode<number>[] = [root];
  const values: number[] = [];

  while (queue.length > 0) {
    const current = queue.shift()!;
    values.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return values;
}
