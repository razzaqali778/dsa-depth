package dynamicprogramming

// MaxPathSum returns the maximum path sum from top-left to bottom-right moving only down or right.
func MaxPathSum(grid [][]int) int {
	rows := len(grid)
	if rows == 0 {
		return 0
	}
	cols := len(grid[0])
	memo := make(map[[2]int]int)

	var dfs func(int, int) int
	dfs = func(r, c int) int {
		if r == rows || c == cols {
			return minInt
		}
		if r == rows-1 && c == cols-1 {
			return grid[r][c]
		}
		key := [2]int{r, c}
		if val, ok := memo[key]; ok {
			return val
		}
		down := dfs(r+1, c)
		right := dfs(r, c+1)
		best := down
		if right > best {
			best = right
		}
		memo[key] = grid[r][c] + best
		return memo[key]
	}

	return dfs(0, 0)
}
