def isPalindrome(s):
    i=0
    j=len(s)-1

    while i<j:
        if s[i] != s[j]:
            return False
        i ++
        j--
    return True