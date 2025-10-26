from functools import lru_cache
from typing import List


def maxPathSum(grid: List[List[int]]) -> int:
    rows = len(grid)
    cols = len(grid[0]) if grid else 0

    @lru_cache(maxsize=None)
    def dfs(r: int, c: int) -> int:
        if r == rows or c == cols:
            return float('-inf')
        if r == rows - 1 and c == cols - 1:
            return grid[r][c]
        return grid[r][c] + max(dfs(r + 1, c), dfs(r, c + 1))

    return dfs(0, 0)
