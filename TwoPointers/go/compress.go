package twopointers

import (
	"strconv"
	"strings"
)

// Compress performs run-length encoding on s.
func Compress(s string) string {
	var builder strings.Builder
	i := 0
	for i < len(s) {
		j := i + 1
		for j < len(s) && s[j] == s[i] {
			j++
		}
		count := j - i
		if count == 1 {
			builder.WriteByte(s[i])
		} else {
			builder.WriteString(strconv.Itoa(count))
			builder.WriteByte(s[i])
		}
		i = j
	}
	return builder.String()
}
