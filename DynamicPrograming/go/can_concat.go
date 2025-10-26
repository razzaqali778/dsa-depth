package dynamicprogramming

// CanConcat reports whether s can be formed by concatenating words.
func CanConcat(s string, words []string) bool {
	memo := make(map[int]bool)

	var dfs func(int) bool
	dfs = func(i int) bool {
		if i == len(s) {
			return true
		}
		if val, ok := memo[i]; ok {
			return val
		}
		for _, word := range words {
			if len(s)-i >= len(word) && s[i:i+len(word)] == word {
				if dfs(i + len(word)) {
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
