from collections import Counter


def anagrams(s1: str, s2: str) -> bool:
    return Counter(s1) == Counter(s2)
