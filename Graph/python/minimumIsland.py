from math import inf

from .graph_utils import Grid, in_bounds, pos_key


def minimum_island(grid: Grid) -> int:
    visited: set[str] = set()
    min_size = inf

    for r in range(len(grid)):
        for c in range(len(grid[0])):
            size = _measure(grid, r, c, visited)
            if 0 < size < min_size:
                min_size = size

    return 0 if min_size is inf else int(min_size)


def _measure(grid: Grid, r: int, c: int, visited: set[str]) -> int:
    if not in_bounds(grid, r, c) or grid[r][c] == "W":
        return 0

    key = pos_key(r, c)
    if key in visited:
        return 0
    visited.add(key)

    size = 1
    size += _measure(grid, r - 1, c, visited)
    size += _measure(grid, r + 1, c, visited)
    size += _measure(grid, r, c - 1, visited)
    size += _measure(grid, r, c + 1, visited)
    return size
