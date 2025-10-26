package graph

type carrotState struct {
	row, col int
	distance int
}

// ClosestCarrot returns the fewest steps from start to any cell containing 'C'.
// Cells marked 'X' are treated as walls.
func ClosestCarrot(grid [][]string, startRow, startCol int) int {
	if len(grid) == 0 {
		return -1
	}
	startPos := positionKey(startRow, startCol)
	queue := []carrotState{{row: startRow, col: startCol, distance: 0}}
	visited := map[string]struct{}{startPos: {}}
	deltas := [][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}

	for len(queue) > 0 {
		state := queue[0]
		queue = queue[1:]

		if grid[state.row][state.col] == "C" {
			return state.distance
		}

		for _, delta := range deltas {
			nr := state.row + delta[0]
			nc := state.col + delta[1]
			if !inBounds(grid, nr, nc) {
				continue
			}
			if grid[nr][nc] == "X" {
				continue
			}
			pos := positionKey(nr, nc)
			if _, seen := visited[pos]; seen {
				continue
			}
			visited[pos] = struct{}{}
			queue = append(queue, carrotState{row: nr, col: nc, distance: state.distance + 1})
		}
	}

	return -1
}
