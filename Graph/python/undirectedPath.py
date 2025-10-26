from typing import List, Tuple

from .graph_utils import Graph, build_undirected_graph


def undirected_path(edges: List[Tuple[str, str]], src: str, dst: str) -> bool:
    graph = build_undirected_graph(edges)
    return _dfs(graph, src, dst, set())


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
