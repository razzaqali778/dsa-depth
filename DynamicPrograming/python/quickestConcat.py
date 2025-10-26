from functools import lru_cache
from typing import List


def quickestConcat(s: str, words: List[str]) -> int:
    @lru_cache(maxsize=None)
    def dfs(i: int) -> int:
        if i == len(s):
            return 0
        best = float('inf')
        for word in words:
            if s.startswith(word, i):
                best = min(best, 1 + dfs(i + len(word)))
        return best

    result = dfs(0)
    return -1 if result == float('inf') else result
