import { TreeNode } from "./TreeNode";

export function depthFirstValues(root: TreeNode<number> | null): number[] {
  if (root === null) {
    return [];
  }

  const values: number[] = [];
  const stack: TreeNode<number>[] = [root];

  while (stack.length > 0) {
    const current = stack.pop()!;
    values.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return values;
}
