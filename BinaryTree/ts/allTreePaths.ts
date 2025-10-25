import { TreeNode } from "./TreeNode";

export function allTreePaths(root: TreeNode<number> | null): number[][] {
  if (root === null) {
    return [];
  }

  if (root.left === null && root.right === null) {
    return [[root.val]];
  }

  const paths: number[][] = [];
  for (const path of allTreePaths(root.left)) {
    paths.push([root.val, ...path]);
  }
  for (const path of allTreePaths(root.right)) {
    paths.push([root.val, ...path]);
  }

  return paths;
}
