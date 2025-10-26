package dynamicprogramming

// NonAdjacentSum returns maximum sum of numbers with no adjacent picks.
func NonAdjacentSum(nums []int) int {
	memo := make(map[int]int)

	var dfs func(int) int
	dfs = func(i int) int {
		if i >= len(nums) {
			return 0
		}
		if val, ok := memo[i]; ok {
			return val
		}
		include := nums[i] + dfs(i+2)
		exclude := dfs(i + 1)
		if include > exclude {
			memo[i] = include
		} else {
			memo[i] = exclude
		}
		return memo[i]
	}

	return dfs(0)
}
