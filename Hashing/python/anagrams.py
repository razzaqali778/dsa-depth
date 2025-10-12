def anagram(S1, s2):
    return char_count(s1) == char_count(s2)


def char_count(s):
    count = {}

    for char in s:
        if char not in count:
            count[char] = 0
        count[char] +=1

    return count