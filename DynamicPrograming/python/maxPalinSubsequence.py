from functools import lru_cache


def maxPalinSubsequence(s: str) -> int:
    if not s:
        return 0

    @lru_cache(maxsize=None)
    def dfs(i: int, j: int) -> int:
        if i == j:
            return 1
        if i > j:
            return 0
        if s[i] == s[j]:
            return 2 + dfs(i + 1, j - 1)
        return max(dfs(i + 1, j), dfs(i, j - 1))

    return dfs(0, len(s) - 1)
