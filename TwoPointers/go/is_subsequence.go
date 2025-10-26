package twopointers

// IsSubsequence reports whether s1 appears in s2 in order.
func IsSubsequence(s1, s2 string) bool {
	i, j := 0, 0
	for i < len(s1) && j < len(s2) {
		if s1[i] == s2[j] {
			i++
			j++
		} else {
			j++
		}
	}
	return i == len(s1)
}
