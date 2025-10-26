from .graph_utils import Graph


def largest_component(graph: Graph) -> int:
    visited: set[str] = set()
    largest = 0

    for node in graph:
        size = _explore_size(graph, node, visited)
        largest = max(largest, size)

    return largest


def _explore_size(graph: Graph, node: str, visited: set[str]) -> int:
    if node in visited:
        return 0
    visited.add(node)

    size = 1
    for neighbor in graph.get(node, []):
        size += _explore_size(graph, neighbor, visited)
    return size
