from collections import deque
from typing import List, Optional

from node import Node


def breadth_first_values(root: Optional[Node]) -> List[int]:
    if root is None:
        return []

    queue = deque([root])
    result: List[int] = []

    while queue:
        current = queue.popleft()
        result.append(current.val)
        if current.left:
            queue.append(current.left)
        if current.right:
            queue.append(current.right)

    return result
