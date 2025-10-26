from typing import Dict, List, Set, Tuple


def prereqs_possible(num_courses: int, prereqs: List[Tuple[int, int]]) -> bool:
    graph: Dict[int, List[int]] = {i: [] for i in range(num_courses)}
    for a, b in prereqs:
        graph[a].append(b)

    visiting: Set[int] = set()
    visited: Set[int] = set()

    for node in range(num_courses):
        if _has_cycle(graph, node, visiting, visited):
            return False

    return True


def _has_cycle(graph: Dict[int, List[int]], node: int, visiting: Set[int], visited: Set[int]) -> bool:
    if node in visited:
        return False
    if node in visiting:
        return True

    visiting.add(node)
    for neighbor in graph[node]:
        if _has_cycle(graph, neighbor, visiting, visited):
            return True
    visiting.remove(node)
    visited.add(node)
    return False
