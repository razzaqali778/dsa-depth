from .graph_utils import Graph


def has_cycle(graph: Graph) -> bool:
    visiting: set[str] = set()
    visited: set[str] = set()

    for node in graph:
        if _detect(graph, node, visiting, visited):
            return True
    return False


def _detect(graph: Graph, node: str, visiting: set[str], visited: set[str]) -> bool:
    if node in visited:
        return False
    if node in visiting:
        return True

    visiting.add(node)
    for neighbor in graph.get(node, []):
        if _detect(graph, neighbor, visiting, visited):
            return True
    visiting.remove(node)
    visited.add(node)
    return False
