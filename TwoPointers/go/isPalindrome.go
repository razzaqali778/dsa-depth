
package main

import (
	"fmt"
	"unicode"
)

// isPalindromeASCII checks palindromes over raw bytes (ASCII-safe).
// Why: Fast and fine if input is plain ASCII; breaks on multi-byte Unicode.
func isPalindromeASCII(s string) bool {
	i, j := 0, len(s)-1
	for i < j {
		if s[i] != s[j] {
			return false
		}
		i++
		j--
	}
	return true
}

// isPalindromeRunes checks palindromes over runes (Unicode-safe, case-sensitive).
// Why: Indexing by runes avoids splitting multi-byte characters.
func isPalindromeRunes(s string) bool {
	r := []rune(s)
	i, j := 0, len(r)-1
	for i < j {
		if r[i] != r[j] {
			return false
		}
		i++
		j--
	}
	return true
}

// isPalindromeFolded ignores case and non-letter/digit characters (Unicode-aware).
// Why: Useful for human text like "A man, a plan, a canal: Panama".
func isPalindromeFolded(s string) bool {
	r := []rune(s)
	i, j := 0, len(r)-1
	for i < j {
		// Move i to next alnum.
		for i < j && !unicode.IsLetter(r[i]) && !unicode.IsDigit(r[i]) {
			i++
		}
		// Move j to prev alnum.
		for i < j && !unicode.IsLetter(r[j]) && !unicode.IsDigit(r[j]) {
			j--
		}
		ri := unicode.ToLower(r[i])
		rj := unicode.ToLower(r[j])
		if ri != rj {
			return false
		}
		i++
		j--
	}
	return true
}

func main() {
	cases := []string{
		"", "a", "ab", "aba", "abba", "abca",
		"こいにくい",       // palindrome in Japanese
		"こいにくxい",      // not palindrome
		"A man, a plan, a canal: Panama",
	}
	for _, s := range cases {
		fmt.Printf("%q -> ASCII:%v  Runes:%v  Folded:%v\n",
			s,
			isPalindromeASCII(s),
			isPalindromeRunes(s),
			isPalindromeFolded(s),
		)
	}
}
