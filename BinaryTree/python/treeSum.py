from typing import Optional

from node import Node


def tree_sum(root: Optional[Node]) -> int:
    if root is None:
        return 0
    return root.val + tree_sum(root.left) + tree_sum(root.right)
