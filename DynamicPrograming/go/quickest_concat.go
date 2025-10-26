package dynamicprogramming

// QuickestConcat returns the minimum number of words required to build s or -1 if impossible.
func QuickestConcat(s string, words []string) int {
	memo := make(map[int]int)

	var dfs func(int) int
	dfs = func(i int) int {
		if i == len(s) {
			return 0
		}
		if val, ok := memo[i]; ok {
			return val
		}
		best := maxInt
		for _, word := range words {
			if i+len(word) <= len(s) && s[i:i+len(word)] == word {
				candidate := 1 + dfs(i+len(word))
				if candidate < best {
					best = candidate
				}
			}
		}
		memo[i] = best
		return best
	}

	result := dfs(0)
	if result >= maxInt {
		return -1
	}
	return result
}
