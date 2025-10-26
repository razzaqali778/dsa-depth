from functools import lru_cache
from typing import Iterable


def countCompounds(compound: str, elements: Iterable[str]) -> int:
    lower_compound = compound.lower()
    lower_elements = [element.lower() for element in elements]

    @lru_cache(maxsize=None)
    def dfs(i: int) -> int:
        if i == len(lower_compound):
            return 1
        total = 0
        for element in lower_elements:
            if lower_compound.startswith(element, i):
                total += dfs(i + len(element))
        return total

    return dfs(0)
