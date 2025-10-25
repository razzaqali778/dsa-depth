from collections import deque
from typing import Deque

from node import Node


def bottom_right_value(root: Node) -> int:
    queue: Deque[Node] = deque([root])
    current = root

    while queue:
        current = queue.popleft()
        if current.left:
            queue.append(current.left)
        if current.right:
            queue.append(current.right)
    return current.val
