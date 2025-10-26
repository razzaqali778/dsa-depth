package dynamicprogramming

// ArrayStepper returns true if it's possible to reach or pass the last index.
func ArrayStepper(numbers []int) bool {
	memo := make(map[int]bool)

	var dfs func(int) bool
	dfs = func(i int) bool {
		if i >= len(numbers)-1 {
			return true
		}
		if val, ok := memo[i]; ok {
			return val
		}
		maxStep := numbers[i]
		for step := 1; step <= maxStep; step++ {
			if dfs(i + step) {
				memo[i] = true
				return true
			}
		}
		memo[i] = false
		return false
	}

	if len(numbers) == 0 {
		return true
	}
	return dfs(0)
}
