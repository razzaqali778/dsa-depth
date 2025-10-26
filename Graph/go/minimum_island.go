package graph

// MinimumIsland returns the size of the smallest island in the grid.
func MinimumIsland(grid [][]string) int {
	if len(grid) == 0 {
		return 0
	}
	visited := map[string]struct{}{}
	minSize := maxInt

	for r := range grid {
		for c := range grid[0] {
			size := measureIsland(grid, r, c, visited)
			if size > 0 && size < minSize {
				minSize = size
			}
		}
	}

	if minSize == maxInt {
		return 0
	}
	return minSize
}

func measureIsland(grid [][]string, r, c int, visited map[string]struct{}) int {
	if !inBounds(grid, r, c) {
		return 0
	}
	if grid[r][c] == "W" {
		return 0
	}
	pos := positionKey(r, c)
	if _, seen := visited[pos]; seen {
		return 0
	}
	visited[pos] = struct{}{}

	size := 1
	size += measureIsland(grid, r-1, c, visited)
	size += measureIsland(grid, r+1, c, visited)
	size += measureIsland(grid, r, c-1, visited)
	size += measureIsland(grid, r, c+1, visited)
	return size
}
