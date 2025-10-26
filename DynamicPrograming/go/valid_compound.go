package dynamicprogramming

import "strings"

// ValidCompound returns true if compound can be spelled using element symbols.
func ValidCompound(compound string, elements []string) bool {
	lowerCompound := strings.ToLower(compound)
	lowerElements := make([]string, len(elements))
	for i, el := range elements {
		lowerElements[i] = strings.ToLower(el)
	}

	memo := make(map[int]bool)

	var dfs func(int) bool
	dfs = func(i int) bool {
		if i == len(lowerCompound) {
			return true
		}
		if val, ok := memo[i]; ok {
			return val
		}
		for _, element := range lowerElements {
			if i+len(element) <= len(lowerCompound) && lowerCompound[i:i+len(element)] == element {
				if dfs(i + len(element)) {
					memo[i] = true
					return true
				}
			}
		}
		memo[i] = false
		return false
	}

	return dfs(0)
}
