from functools import lru_cache
from typing import List


def arrayStepper(numbers: List[int]) -> bool:
    @lru_cache(maxsize=None)
    def dfs(i: int) -> bool:
        if i >= len(numbers) - 1:
            return True
        max_step = numbers[i]
        for step in range(1, max_step + 1):
            if dfs(i + step):
                return True
        return False

    if not numbers:
        return True
    return dfs(0)
