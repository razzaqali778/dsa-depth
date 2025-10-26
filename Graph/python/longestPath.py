from .graph_utils import Graph


def longest_path(graph: Graph) -> int:
    distance: dict[str, int] = {node: 0 for node, neighbors in graph.items() if not neighbors}
    best = 0

    for node in graph:
        value = _traverse(graph, node, distance)
        best = max(best, value)

    return best


def _traverse(graph: Graph, node: str, distance: dict[str, int]) -> int:
    if node in distance:
        return distance[node]

    max_neighbor = 0
    for neighbor in graph.get(node, []):
        attempt = _traverse(graph, neighbor, distance)
        max_neighbor = max(max_neighbor, attempt)

    distance[node] = max_neighbor + 1
    return distance[node]
