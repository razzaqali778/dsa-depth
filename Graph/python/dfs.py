from typing import List

from .graph_utils import Graph


def depth_first_traversal(graph: Graph, source: str) -> List[str]:
    if not source:
        return []

    order: List[str] = []
    stack = [source]
    visited = set()

    while stack:
        node = stack.pop()
        if node in visited:
            continue
        visited.add(node)
        order.append(node)

        for neighbor in reversed(graph.get(node, [])):
            stack.append(neighbor)

    return order
