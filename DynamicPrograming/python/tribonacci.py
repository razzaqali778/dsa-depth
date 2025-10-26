from functools import lru_cache


def tribonacci(n: int) -> int:
    @lru_cache(maxsize=None)
    def helper(k: int) -> int:
        if k == 0:
            return 0
        if k in (1, 2):
            return 1
        return helper(k - 1) + helper(k - 2) + helper(k - 3)

    return helper(n)
