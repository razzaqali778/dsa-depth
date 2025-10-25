from typing import List, Optional

from node import Node


def leaf_list(root: Optional[Node]) -> List[int]:
    leaves: List[int] = []
    collect(root, leaves)
    return leaves


def collect(node: Optional[Node], leaves: List[int]) -> None:
    if node is None:
        return
    if node.left is None and node.right is None:
        leaves.append(node.val)
        return
    collect(node.left, leaves)
    collect(node.right, leaves)
