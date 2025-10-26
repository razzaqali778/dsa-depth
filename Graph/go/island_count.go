package graph

// IslandCount counts the number of islands (L) in the grid.
func IslandCount(grid [][]string) int {
	if len(grid) == 0 {
		return 0
	}

	visited := map[string]struct{}{}
	count := 0
	for r := range grid {
		for c := range grid[0] {
			if exploreIsland(grid, r, c, visited) {
				count++
			}
		}
	}
	return count
}

func exploreIsland(grid [][]string, r, c int, visited map[string]struct{}) bool {
	if !inBounds(grid, r, c) {
		return false
	}
	if grid[r][c] == "W" {
		return false
	}
	pos := positionKey(r, c)
	if _, seen := visited[pos]; seen {
		return false
	}
	visited[pos] = struct{}{}

	exploreIsland(grid, r-1, c, visited)
	exploreIsland(grid, r+1, c, visited)
	exploreIsland(grid, r, c-1, visited)
	exploreIsland(grid, r, c+1, visited)
	return true
}
