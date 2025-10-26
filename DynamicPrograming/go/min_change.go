package dynamicprogramming

// MinChange returns the minimum coins required or -1 if impossible.
func MinChange(amount int, coins []int) int {
	memo := make(map[int]int)

	var dfs func(int) int
	dfs = func(remaining int) int {
		if remaining < 0 {
			return maxInt
		}
		if remaining == 0 {
			return 0
		}
		if val, ok := memo[remaining]; ok {
			return val
		}
		best := maxInt
		for _, coin := range coins {
			candidate := 1 + dfs(remaining-coin)
			if candidate < best {
				best = candidate
			}
		}
		memo[remaining] = best
		return best
	}

	answer := dfs(amount)
	if answer >= maxInt {
		return -1
	}
	return answer
}
