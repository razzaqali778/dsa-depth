from functools import lru_cache
from typing import List


def sumPossible(amount: int, numbers: List[int]) -> bool:
    @lru_cache(maxsize=None)
    def dfs(remaining: int) -> bool:
        if remaining == 0:
            return True
        if remaining < 0:
            return False
        for num in numbers:
            if dfs(remaining - num):
                return True
        return False

    return dfs(amount)
