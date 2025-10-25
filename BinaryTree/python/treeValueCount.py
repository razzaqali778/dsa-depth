from typing import Optional

from node import Node


def tree_value_count(root: Optional[Node], target: int) -> int:
    if root is None:
        return 0
    match = 1 if root.val == target else 0
    return match + tree_value_count(root.left, target) + tree_value_count(root.right, target)
