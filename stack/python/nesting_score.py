def nesting_score(brackets: str) -> int:
    stack = [0]
    for ch in brackets:
        if ch == '[':
            stack.append(0)
        else:
            top = stack.pop()
            if top == 0:
                stack[-1] += 1
            else:
                stack[-1] += 2 * top
    return stack[0]
