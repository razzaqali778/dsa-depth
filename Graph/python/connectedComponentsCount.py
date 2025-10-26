from .graph_utils import Graph


def connected_components_count(graph: Graph) -> int:
    visited: set[str] = set()
    count = 0

    for node in graph:
        if _explore(graph, node, visited):
            count += 1

    return count


def _explore(graph: Graph, node: str, visited: set[str]) -> bool:
    if node in visited:
        return False
    visited.add(node)

    for neighbor in graph.get(node, []):
        _explore(graph, neighbor, visited)
    return True
