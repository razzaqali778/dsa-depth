from functools import lru_cache


def summingSquares(n: int) -> int:
    @lru_cache(maxsize=None)
    def dfs(value: int) -> int:
        if value == 0:
            return 0
        best = float('inf')
        i = 1
        while i * i <= value:
            best = min(best, 1 + dfs(value - i * i))
            i += 1
        return best

    return dfs(n)
