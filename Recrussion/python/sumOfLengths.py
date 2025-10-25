
from typing import Sequence


def sum_of_lengths(words: Sequence[str]) -> int:
    if not words:
        return 0
    return len(words[0]) + sum_of_lengths(words[1:])
