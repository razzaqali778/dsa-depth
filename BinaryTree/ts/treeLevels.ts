import { TreeNode } from "./TreeNode";

export function treeLevels(root: TreeNode<number> | null): number[][] {
  if (root === null) {
    return [];
  }

  const levels: number[][] = [];
  const queue: Array<{ node: TreeNode<number>; level: number }> = [{ node: root, level: 0 }];

  while (queue.length > 0) {
    const { node, level } = queue.shift()!;
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(node.val);
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }

  return levels;
}
