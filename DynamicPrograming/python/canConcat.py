from functools import lru_cache
from typing import List


def canConcat(s: str, words: List[str]) -> bool:
    @lru_cache(maxsize=None)
    def dfs(i: int) -> bool:
        if i == len(s):
            return True
        for word in words:
            if s.startswith(word, i) and dfs(i + len(word)):
                return True
        return False

    return dfs(0)
