package dynamicprogramming

// CountPaths counts paths through a grid avoiding X cells.
func CountPaths(grid [][]string) int {
	rows := len(grid)
	if rows == 0 {
		return 0
	}
	cols := len(grid[0])
	memo := make(map[[2]int]int)

	var dfs func(int, int) int
	dfs = func(r, c int) int {
		if r >= rows || c >= cols || grid[r][c] == "X" {
			return 0
		}
		if r == rows-1 && c == cols-1 {
			return 1
		}
		key := [2]int{r, c}
		if val, ok := memo[key]; ok {
			return val
		}
		paths := dfs(r+1, c) + dfs(r, c+1)
		memo[key] = paths
		return paths
	}

	return dfs(0, 0)
}
