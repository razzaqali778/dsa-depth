from typing import Dict, List, Tuple


def semesters_required(num_courses: int, prereqs: List[Tuple[int, int]]) -> int:
    graph: Dict[int, List[int]] = {i: [] for i in range(num_courses)}
    for a, b in prereqs:
        graph[a].append(b)

    distance: Dict[int, int] = {node: 1 for node in graph if not graph[node]}

    longest = 0
    for node in range(num_courses):
        value = _traverse(graph, node, distance)
        if value > longest:
            longest = value
    return longest


def _traverse(graph: Dict[int, List[int]], node: int, distance: Dict[int, int]) -> int:
    if node in distance:
        return distance[node]

    max_child = 0
    for neighbor in graph[node]:
        candidate = _traverse(graph, neighbor, distance)
        if candidate > max_child:
            max_child = candidate

    distance[node] = max_child + 1
    return distance[node]
