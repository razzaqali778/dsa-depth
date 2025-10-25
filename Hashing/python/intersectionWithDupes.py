from collections import Counter
from typing import Iterable, List, TypeVar

T = TypeVar("T")


def intersection_with_dupes(first: Iterable[T], second: Iterable[T]) -> List[T]:
    counts = Counter(first)
    result: List[T] = []

    for item in second:
        if counts[item] > 0:
            result.append(item)
            counts[item] -= 1

    return result
