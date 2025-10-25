from typing import List, Tuple


def pair_product(numbers: List[int], target_product: int) -> Tuple[int, int]:
    indices: dict[int, int] = {}

    for i, value in enumerate(numbers):
        if value == 0:
            if target_product == 0 and 0 in indices:
                return (indices[0], i)
            if 0 not in indices:
                indices[0] = i
            continue

        if target_product % value != 0:
            if value not in indices:
                indices[value] = i
            continue

        complement = target_product // value
        if complement in indices:
            return (indices[complement], i)
        if value not in indices:
            indices[value] = i

    raise ValueError("Pair not found")
