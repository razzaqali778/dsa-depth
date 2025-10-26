from typing import Iterable


def befitting_brackets(s: str) -> bool:
    stack: list[str] = []
    matching = {')': '(', ']': '[', '}': '{'}

    for ch in s:
        if ch in '([{':
            stack.append(ch)
        elif ch in matching:
            if not stack or stack.pop() != matching[ch]:
                return False
    return not stack
