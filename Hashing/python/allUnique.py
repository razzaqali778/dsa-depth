from typing import Iterable, TypeVar, Hashable

T = TypeVar("T", bound=Hashable)


def all_unique(items: Iterable[T]) -> bool:
    seen = set()
    for item in items:
        if item in seen:
            return False
        seen.add(item)
    return True
