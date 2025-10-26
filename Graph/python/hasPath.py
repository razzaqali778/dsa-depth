from .graph_utils import Graph


def has_path(graph: Graph, src: str, dst: str) -> bool:
    if src == dst:
        return True
    visited: set[str] = set()
    return _dfs(graph, src, dst, visited)


def _dfs(graph: Graph, node: str, dst: str, visited: set[str]) -> bool:
    if node == dst:
        return True
    if node in visited:
        return False

    visited.add(node)
    for neighbor in graph.get(node, []):
        if _dfs(graph, neighbor, dst, visited):
            return True
    return False
