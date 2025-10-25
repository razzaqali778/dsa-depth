from typing import List, Optional

from node import Node


def depth_first_values(root: Optional[Node]) -> List[int]:
    if root is None:
        return []

    values: List[int] = []
    stack = [root]
    while stack:
        current = stack.pop()
        values.append(current.val)
        if current.right:
            stack.append(current.right)
        if current.left:
            stack.append(current.left)
    return values
