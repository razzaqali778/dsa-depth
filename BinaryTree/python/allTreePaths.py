from typing import List, Optional

from node import Node


def all_tree_paths(root: Optional[Node]) -> List[List[int]]:
    if root is None:
        return []
    if root.left is None and root.right is None:
        return [[root.val]]

    paths: List[List[int]] = []
    for path in all_tree_paths(root.left):
        paths.append([root.val, *path])
    for path in all_tree_paths(root.right):
        paths.append([root.val, *path])
    return paths
