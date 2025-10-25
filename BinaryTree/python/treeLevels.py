from collections import deque
from typing import List, Optional

from node import Node


def tree_levels(root: Optional[Node]) -> List[List[int]]:
    if root is None:
        return []

    levels: List[List[int]] = []
    queue = deque([(root, 0)])
    while queue:
        current, level = queue.popleft()
        if len(levels) == level:
            levels.append([])
        levels[level].append(current.val)
        if current.left:
            queue.append((current.left, level + 1))
        if current.right:
            queue.append((current.right, level + 1))
    return levels
