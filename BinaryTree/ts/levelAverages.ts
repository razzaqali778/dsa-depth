import { TreeNode } from "./TreeNode";

export function levelAverages(root: TreeNode<number> | null): number[] {
  if (root === null) {
    return [];
  }

  const queue: Array<{ node: TreeNode<number>; level: number }> = [{ node: root, level: 0 }];
  const sums: number[] = [];
  const counts: number[] = [];

  while (queue.length > 0) {
    const { node, level } = queue.shift()!;
    sums[level] = (sums[level] ?? 0) + node.val;
    counts[level] = (counts[level] ?? 0) + 1;
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }

  return sums.map((sum, idx) => sum / counts[idx]);
}
