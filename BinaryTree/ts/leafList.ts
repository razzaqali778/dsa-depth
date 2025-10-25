import { TreeNode } from "./TreeNode";

export function leafList(root: TreeNode<number> | null): number[] {
  const leaves: number[] = [];
  collectLeaves(root, leaves);
  return leaves;
}

function collectLeaves(node: TreeNode<number> | null, leaves: number[]): void {
  if (node === null) {
    return;
  }
  if (node.left === null && node.right === null) {
    leaves.push(node.val);
    return;
  }
  collectLeaves(node.left, leaves);
  collectLeaves(node.right, leaves);
}
