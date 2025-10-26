def paired_parentheses(s: str) -> bool:
    balance = 0
    for ch in s:
        if ch == '(':
            balance += 1
        elif ch == ')':
            balance -= 1
            if balance < 0:
                return False
    return balance == 0
