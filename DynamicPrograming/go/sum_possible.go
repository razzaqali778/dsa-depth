package dynamicprogramming

// SumPossible determines if amount can be formed using numbers.
func SumPossible(amount int, numbers []int) bool {
	memo := make(map[int]bool)

	var dfs func(int) bool
	dfs = func(remaining int) bool {
		if remaining == 0 {
			return true
		}
		if remaining < 0 {
			return false
		}
		if val, ok := memo[remaining]; ok {
			return val
		}
		for _, num := range numbers {
			if dfs(remaining - num) {
				memo[remaining] = true
				return true
			}
		}
		memo[remaining] = false
		return false
	}

	return dfs(amount)
}
