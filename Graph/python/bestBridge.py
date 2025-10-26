from collections import deque
from typing import Deque

from .graph_utils import Grid, in_bounds, pos_key


def best_bridge(grid: Grid) -> int:
    first_island: set[str] = set()

    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == "L":
                _collect_island(grid, r, c, first_island)
                if first_island:
                    break
        if first_island:
            break

    if not first_island:
        return 0

    queue: Deque[tuple[int, int, int]] = deque()
    visited = set(first_island)
    for key in first_island:
        row, col = map(int, key.split(","))
        queue.append((row, col, 0))

    deltas = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    while queue:
        row, col, dist = queue.popleft()
        key = pos_key(row, col)
        if grid[row][col] == "L" and key not in first_island:
            return dist - 1

        for dr, dc in deltas:
            nr, nc = row + dr, col + dc
            nkey = pos_key(nr, nc)
            if not in_bounds(grid, nr, nc) or nkey in visited:
                continue
            visited.add(nkey)
            queue.append((nr, nc, dist + 1))

    return -1


def _collect_island(grid: Grid, r: int, c: int, island: set[str]) -> None:
    if not in_bounds(grid, r, c) or grid[r][c] == "W":
        return
    key = pos_key(r, c)
    if key in island:
        return
    island.add(key)

    _collect_island(grid, r - 1, c, island)
    _collect_island(grid, r + 1, c, island)
    _collect_island(grid, r, c - 1, island)
    _collect_island(grid, r, c + 1, island)
