package dynamicprogramming

// SummingSquares returns minimum number of perfect squares that sum to n.
func SummingSquares(n int) int {
	memo := make(map[int]int)

	var dfs func(int) int
	dfs = func(value int) int {
		if value == 0 {
			return 0
		}
		if val, ok := memo[value]; ok {
			return val
		}
		best := maxInt
		for i := 1; i*i <= value; i++ {
			candidate := 1 + dfs(value-i*i)
			if candidate < best {
				best = candidate
			}
		}
		memo[value] = best
		return best
	}

	return dfs(n)
}
