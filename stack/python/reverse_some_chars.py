from typing import Iterable


def reverse_some_chars(s: str, chars: Iterable[str]) -> str:
    target_set = set(chars)
    stack = [ch for ch in s if ch in target_set]

    result = []
    for ch in s:
        if ch in target_set:
            result.append(stack.pop())
        else:
            result.append(ch)
    return ''.join(result)
