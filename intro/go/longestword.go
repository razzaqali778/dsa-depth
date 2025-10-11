// File: go/cmd/longestword/main.go
package main

import (
	"fmt"
	"strings"
)

func longestWord(sentence string) string {
	words := strings.Split(sentence, " ")
	longest := ""
	for _, w := range words {
		if len(w) >= len(longest) {
			longest = w
		}
	}
	return longest
}

func main() {
	fmt.Println(longestWord("one three five seven")) // "seven"
	fmt.Println(longestWord("a bb cc"))              // "cc" (last longest)
}
