from typing import List, Tuple


def pair_sum(numbers: List[int], target_sum: int) -> Tuple[int, int]:
    indices: dict[int, int] = {}
    for idx, value in enumerate(numbers):
        complement = target_sum - value
        if complement in indices:
            return (indices[complement], idx)
        indices[value] = idx
    raise ValueError("Pair not found")
