from functools import lru_cache
from typing import List


def minChange(amount: int, coins: List[int]) -> int:
    @lru_cache(maxsize=None)
    def dfs(remaining: int) -> int:
        if remaining < 0:
            return float('inf')
        if remaining == 0:
            return 0
        best = float('inf')
        for coin in coins:
            best = min(best, 1 + dfs(remaining - coin))
        return best

    answer = dfs(amount)
    return -1 if answer == float('inf') else answer
