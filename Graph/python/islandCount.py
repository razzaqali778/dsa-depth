from .graph_utils import Grid, in_bounds, pos_key


def island_count(grid: Grid) -> int:
    visited: set[str] = set()
    count = 0

    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if _explore(grid, r, c, visited):
                count += 1
    return count


def _explore(grid: Grid, r: int, c: int, visited: set[str]) -> bool:
    if not in_bounds(grid, r, c):
        return False
    if grid[r][c] == "W":
        return False

    key = pos_key(r, c)
    if key in visited:
        return False
    visited.add(key)

    _explore(grid, r - 1, c, visited)
    _explore(grid, r + 1, c, visited)
    _explore(grid, r, c - 1, visited)
    _explore(grid, r, c + 1, visited)
    return True
