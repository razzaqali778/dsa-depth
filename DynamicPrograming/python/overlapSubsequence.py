from functools import lru_cache


def overlapSubsequence(str1: str, str2: str) -> int:
    @lru_cache(maxsize=None)
    def dfs(i: int, j: int) -> int:
        if i == len(str1) or j == len(str2):
            return 0
        if str1[i] == str2[j]:
            return 1 + dfs(i + 1, j + 1)
        return max(dfs(i + 1, j), dfs(i, j + 1))

    return dfs(0, 0)
