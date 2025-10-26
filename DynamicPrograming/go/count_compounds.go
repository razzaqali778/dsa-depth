package dynamicprogramming

import "strings"

// CountCompounds returns the number of ways to spell compound using chemical elements.
func CountCompounds(compound string, elements []string) int {
	lowerCompound := strings.ToLower(compound)
	lowerElements := make([]string, len(elements))
	for i, el := range elements {
		lowerElements[i] = strings.ToLower(el)
	}

	memo := make(map[int]int)

	var dfs func(int) int
	dfs = func(i int) int {
		if i == len(lowerCompound) {
			return 1
		}
		if val, ok := memo[i]; ok {
			return val
		}
		total := 0
		for _, element := range lowerElements {
			if i+len(element) <= len(lowerCompound) && lowerCompound[i:i+len(element)] == element {
				total += dfs(i + len(element))
			}
		}
		memo[i] = total
		return total
	}

	return dfs(0)
}
