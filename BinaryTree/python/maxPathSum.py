from typing import Optional

from node import Node


def max_path_sum(root: Optional[Node]) -> int:
    if root is None:
        return float("-inf")
    if root.left is None and root.right is None:
        return root.val
    return root.val + max(max_path_sum(root.left), max_path_sum(root.right))
