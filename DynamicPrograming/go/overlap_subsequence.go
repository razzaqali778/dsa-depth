package dynamicprogramming

// OverlapSubsequence returns length of longest common subsequence.
func OverlapSubsequence(str1, str2 string) int {
	memo := make(map[[2]int]int)

	var dfs func(int, int) int
	dfs = func(i, j int) int {
		if i == len(str1) || j == len(str2) {
			return 0
		}
		key := [2]int{i, j}
		if val, ok := memo[key]; ok {
			return val
		}
		if str1[i] == str2[j] {
			memo[key] = 1 + dfs(i+1, j+1)
		} else {
			left := dfs(i+1, j)
			right := dfs(i, j+1)
			if left > right {
				memo[key] = left
			} else {
				memo[key] = right
			}
		}
		return memo[key]
	}

	return dfs(0, 0)
}
