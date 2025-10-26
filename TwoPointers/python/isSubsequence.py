def isSubsequence(target: str, source: str) -> bool:
    i = j = 0
    while i < len(target) and j < len(source):
        if target[i] == source[j]:
            i += 1
        j += 1
    return i == len(target)
