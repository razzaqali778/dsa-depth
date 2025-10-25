from collections import deque
from typing import Optional

from node import Node


def tree_includes(root: Optional[Node], target: int) -> bool:
    if root is None:
        return False

    queue = deque([root])
    while queue:
        current = queue.popleft()
        if current.val == target:
            return True
        if current.left:
            queue.append(current.left)
        if current.right:
            queue.append(current.right)
    return False
