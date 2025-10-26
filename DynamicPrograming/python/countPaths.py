from functools import lru_cache
from typing import List


def countPaths(grid: List[List[str]]) -> int:
    rows = len(grid)
    cols = len(grid[0]) if grid else 0

    @lru_cache(maxsize=None)
    def dfs(r: int, c: int) -> int:
        if r >= rows or c >= cols or grid[r][c] == "X":
            return 0
        if r == rows - 1 and c == cols - 1:
            return 1
        return dfs(r + 1, c) + dfs(r, c + 1)

    return dfs(0, 0)
