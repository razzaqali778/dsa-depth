package dynamicprogramming

// CountingChange returns number of ways to form amount using coins.
func CountingChange(amount int, coins []int) int {
	memo := make(map[[2]int]int)

	var dfs func(int, int) int
	dfs = func(remaining, index int) int {
		key := [2]int{remaining, index}
		if val, ok := memo[key]; ok {
			return val
		}
		if remaining == 0 {
			return 1
		}
		if index == len(coins) {
			return 0
		}

		coin := coins[index]
		ways := 0
		for qty := 0; qty*coin <= remaining; qty++ {
			ways += dfs(remaining-qty*coin, index+1)
		}
		memo[key] = ways
		return ways
	}

	return dfs(amount, 0)
}
