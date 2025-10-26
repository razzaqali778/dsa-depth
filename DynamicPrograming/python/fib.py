from functools import lru_cache


def fib(n: int) -> int:
    @lru_cache(maxsize=None)
    def helper(k: int) -> int:
        if k in (0, 1):
            return k
        return helper(k - 1) + helper(k - 2)

    return helper(n)
