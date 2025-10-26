package twopointers

import "strings"

// Uncompress expands a run-length encoded string.
func Uncompress(s string) string {
	var builder strings.Builder
	i := 0
	for i < len(s) {
		j := i
		for j < len(s) && s[j] >= '0' && s[j] <= '9' {
			j++
		}
		count := 0
		for k := i; k < j; k++ {
			count = count*10 + int(s[k]-'0')
		}
		if j >= len(s) {
			break
		}
		for n := 0; n < count; n++ {
			builder.WriteByte(s[j])
		}
		i = j + 1
	}
	return builder.String()
}
