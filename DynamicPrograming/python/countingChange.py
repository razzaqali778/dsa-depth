from functools import lru_cache
from typing import List


def countingChange(amount: int, coins: List[int]) -> int:
    @lru_cache(maxsize=None)
    def dfs(remaining: int, index: int) -> int:
        if remaining == 0:
            return 1
        if index == len(coins):
            return 0

        coin = coins[index]
        ways = 0
        qty = 0
        while qty * coin <= remaining:
            ways += dfs(remaining - qty * coin, index + 1)
            qty += 1
        return ways

    return dfs(amount, 0)
