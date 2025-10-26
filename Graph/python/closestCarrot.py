from collections import deque
from typing import Deque

from .graph_utils import Grid, in_bounds, pos_key


def closest_carrot(grid: Grid, start_row: int, start_col: int) -> int:
    queue: Deque[tuple[int, int, int]] = deque([(start_row, start_col, 0)])
    visited = {pos_key(start_row, start_col)}
    deltas = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    while queue:
        row, col, distance = queue.popleft()
        if grid[row][col] == "C":
            return distance

        for dr, dc in deltas:
            nr, nc = row + dr, col + dc
            key = pos_key(nr, nc)
            if not in_bounds(grid, nr, nc):
                continue
            if grid[nr][nc] == "X" or key in visited:
                continue
            visited.add(key)
            queue.append((nr, nc, distance + 1))

    return -1
