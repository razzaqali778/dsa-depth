const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
    const key = i + ',' + j

    if (key in memo) return memo[key]

    if (i === j) return 1

    if (i > j) return 0

    if (str[i] === str[j]) {
        memo[i] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo)
    } else {

        memo[i] = Math.max(
            maxPalinSubsequence(str, i + 1, j, memo),
            maxPalinSubsequence(str, i, j - 1, memo))
    }

    return memo[i]
}