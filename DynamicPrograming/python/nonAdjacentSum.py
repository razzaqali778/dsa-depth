from functools import lru_cache
from typing import List


def nonAdjacentSum(nums: List[int]) -> int:
    @lru_cache(maxsize=None)
    def dfs(i: int) -> int:
        if i >= len(nums):
            return 0
        include = nums[i] + dfs(i + 2)
        exclude = dfs(i + 1)
        return max(include, exclude)

    return dfs(0)
