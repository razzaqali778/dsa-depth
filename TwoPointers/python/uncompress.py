def uncompress(s: str) -> str:
    result: list[str] = []
    i = 0
    while i < len(s):
        j = i
        while j < len(s) and s[j].isdigit():
            j += 1
        count = int(s[i:j])
        result.append(s[j] * count)
        i = j + 1
    return "".join(result)
