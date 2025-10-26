from collections import deque
from typing import Deque, List, Tuple

from .graph_utils import Graph, build_undirected_graph


def shortest_path(edges: List[Tuple[str, str]], node_a: str, node_b: str) -> int:
    graph = build_undirected_graph(edges)
    queue: Deque[tuple[str, int]] = deque([(node_a, 0)])
    visited = {node_a}

    while queue:
        node, distance = queue.popleft()
        if node == node_b:
            return distance
        for neighbor in graph.get(node, []):
            if neighbor in visited:
                continue
            visited.add(neighbor)
            queue.append((neighbor, distance + 1))
    return -1
