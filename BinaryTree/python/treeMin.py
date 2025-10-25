from typing import Optional

from node import Node


def tree_min(root: Optional[Node]) -> int:
    if root is None:
        return float("inf")
    return min(root.val, tree_min(root.left), tree_min(root.right))
