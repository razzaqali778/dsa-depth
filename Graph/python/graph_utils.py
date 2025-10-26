from __future__ import annotations

from typing import Dict, List, Tuple

Graph = Dict[str, List[str]]
Grid = List[List[str]]


def build_undirected_graph(edges: List[Tuple[str, str]]) -> Graph:
    graph: Graph = {}
    for a, b in edges:
        graph.setdefault(a, []).append(b)
        graph.setdefault(b, []).append(a)
    return graph


def in_bounds(grid: Grid, r: int, c: int) -> bool:
    return 0 <= r < len(grid) and 0 <= c < len(grid[0])


def pos_key(r: int, c: int) -> str:
    return f"{r},{c}"
