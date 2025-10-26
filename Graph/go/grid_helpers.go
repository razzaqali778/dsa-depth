package graph

import (
	"fmt"
	"strconv"
	"strings"
)

func inBounds(grid [][]string, r, c int) bool {
	if r < 0 || r >= len(grid) {
		return false
	}
	if c < 0 || c >= len(grid[0]) {
		return false
	}
	return true
}

func positionKey(r, c int) string {
	return fmt.Sprintf("%d,%d", r, c)
}

func parsePosition(pos string) (int, int) {
	parts := strings.Split(pos, ",")
	if len(parts) != 2 {
		return 0, 0
	}
	row, _ := strconv.Atoi(parts[0])
	col, _ := strconv.Atoi(parts[1])
	return row, col
}
