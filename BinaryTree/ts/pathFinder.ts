import { TreeNode } from "./TreeNode";

export function pathFinder(root: TreeNode<number> | null, target: number): number[] | null {
  const path = buildPath(root, target);
  return path ? path.reverse() : null;
}

function buildPath(node: TreeNode<number> | null, target: number): number[] | null {
  if (node === null) {
    return null;
  }
  if (node.val === target) {
    return [node.val];
  }

  const leftPath = buildPath(node.left, target);
  if (leftPath) {
    leftPath.push(node.val);
    return leftPath;
  }

  const rightPath = buildPath(node.right, target);
  if (rightPath) {
    rightPath.push(node.val);
    return rightPath;
  }

  return null;
}
