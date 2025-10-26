from functools import lru_cache
from typing import Iterable


def validCompound(compound: str, elements: Iterable[str]) -> bool:
    lower_compound = compound.lower()
    lower_elements = [element.lower() for element in elements]

    @lru_cache(maxsize=None)
    def dfs(i: int) -> bool:
        if i == len(lower_compound):
            return True
        for element in lower_elements:
            if lower_compound.startswith(element, i) and dfs(i + len(element)):
                return True
        return False

    return dfs(0)
