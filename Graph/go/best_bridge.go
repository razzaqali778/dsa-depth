package graph

type bridgeState struct {
	row, col int
	dist     int
}

// BestBridge returns the minimum number of water tiles to flip to connect two islands.
func BestBridge(grid [][]string) int {
	firstIsland := map[string]struct{}{}
	found := false

	for r := range grid {
		for c := range grid[0] {
			if grid[r][c] == "L" {
				collectIsland(grid, r, c, firstIsland)
				if len(firstIsland) > 0 {
					found = true
					break
				}
			}
		}
		if found {
			break
		}
	}

	if len(firstIsland) == 0 {
		return 0
	}

	visited := map[string]struct{}{}
	queue := []bridgeState{}
	for pos := range firstIsland {
		r, c := parsePosition(pos)
		queue = append(queue, bridgeState{row: r, col: c, dist: 0})
		visited[pos] = struct{}{}
	}

	deltas := [][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

	for len(queue) > 0 {
		state := queue[0]
		queue = queue[1:]

		pos := positionKey(state.row, state.col)
		if grid[state.row][state.col] == "L" {
			if _, inside := firstIsland[pos]; !inside {
				return state.dist - 1
			}
		}

		for _, delta := range deltas {
			nr := state.row + delta[0]
			nc := state.col + delta[1]
			if !inBounds(grid, nr, nc) {
				continue
			}
			neighborPos := positionKey(nr, nc)
			if _, seen := visited[neighborPos]; seen {
				continue
			}
			visited[neighborPos] = struct{}{}
			queue = append(queue, bridgeState{row: nr, col: nc, dist: state.dist + 1})
		}
	}

	return -1
}

func collectIsland(grid [][]string, r, c int, island map[string]struct{}) {
	if !inBounds(grid, r, c) {
		return
	}
	if grid[r][c] == "W" {
		return
	}
	pos := positionKey(r, c)
	if _, seen := island[pos]; seen {
		return
	}
	island[pos] = struct{}{}

	collectIsland(grid, r-1, c, island)
	collectIsland(grid, r+1, c, island)
	collectIsland(grid, r, c-1, island)
	collectIsland(grid, r, c+1, island)
}
