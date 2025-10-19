package main

import (
	"fmt"
)


func Anagrams(s1, s2 string) bool {
	count := make(map[rune]int)
	for _, r := range s1 {
		
		if _, ok := count[r]; !ok {
			count[r] = 0
		}
		count[r]++
	}

	for _, r := range s2 {
		if _, ok := count[r]; !ok { 
			return false
		} else {
			count[r]--
	}

	for _, v := range count {
		if v != 0 {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(Anagrams("listen", "silent")) 
	fmt.Println(Anagrams("ab", "a"))          
	fmt.Println(Anagrams("aab", "aba"))       
}
