from collections import deque
from typing import List

from .graph_utils import Graph


def breadth_first_traversal(graph: Graph, source: str) -> List[str]:
    if not source:
        return []

    order: List[str] = []
    queue: deque[str] = deque([source])
    visited = {source}

    while queue:
        node = queue.popleft()
        order.append(node)

        for neighbor in graph.get(node, []):
            if neighbor in visited:
                continue
            visited.add(neighbor)
            queue.append(neighbor)

    return order
