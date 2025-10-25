from collections import deque
from typing import List, Optional

from node import Node


def level_averages(root: Optional<Node]) -> List[float]:
    if root is None:
        return []

    averages: List[float] = []
    queue = deque([root])
    while queue:
        level_sum = 0
        level_count = len(queue)
        for _ in range(level_count):
            current = queue.popleft()
            level_sum += current.val
            if current.left:
                queue.append(current.left)
            if current.right:
                queue.append(current.right)
        averages.append(level_sum / level_count)
    return averages
