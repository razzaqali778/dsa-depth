def decompress_braces(s: str) -> str:
    stack: list[str | int] = []
    for ch in s:
        if ch.isdigit():
            stack.append(int(ch))
        elif ch == '{':
            continue
        elif ch == '}':
            segment = []
            while stack and isinstance(stack[-1], str):
                segment.append(stack.pop())
            segment_str = ''.join(reversed(segment))
            count = stack.pop()
            stack.append(segment_str * count)
        else:
            stack.append(ch)
    return ''.join(stack)
