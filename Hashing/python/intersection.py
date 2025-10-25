from typing import Iterable, List, TypeVar

T = TypeVar("T")


def intersection(first: Iterable[T], second: Iterable[T]) -> List[T]:
    second_set = set(second)
    added = set()
    result: List[T] = []

    for item in first:
        if item in second_set and item not in added:
            added.add(item)
            result.append(item)

    return result
