
from typing import Sequence


def sum_numbers_recursive(values: Sequence[int]) -> int:
    if not values:
        return 0
    return values[0] + sum_numbers_recursive(values[1:])
