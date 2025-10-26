def compress(s: str) -> str:
    if not s:
        return ""

    parts: list[str] = []
    i = 0
    while i < len(s):
        j = i + 1
        while j < len(s) and s[j] == s[i]:
            j += 1
        count = j - i
        if count == 1:
            parts.append(s[i])
        else:
            parts.append(str(count))
            parts.append(s[i])
        i = j

    return "".join(parts)
