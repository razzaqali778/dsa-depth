package dynamicprogramming

// MaxPalinSubsequence returns length of the longest palindromic subsequence.
func MaxPalinSubsequence(s string) int {
	if len(s) == 0 {
		return 0
	}
	memo := make(map[[2]int]int)

	var dfs func(int, int) int
	dfs = func(i, j int) int {
		if i == j {
			return 1
		}
		if i > j {
			return 0
		}
		key := [2]int{i, j}
		if val, ok := memo[key]; ok {
			return val
		}
		if s[i] == s[j] {
			memo[key] = 2 + dfs(i+1, j-1)
		} else {
			left := dfs(i+1, j)
			right := dfs(i, j-1)
			if left > right {
				memo[key] = left
			} else {
				memo[key] = right
			}
		}
		return memo[key]
	}

	return dfs(0, len(s)-1)
}
