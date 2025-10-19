package main

import (
	"fmt"
)

func AllUnique[T comparable](items []T) bool {
	if len(items) < 2 {
		return true
	}
	seen := make(map[T]struct{}, len(items))
	for _, v := range items {
		if _, ok := seen[v]; ok {
			return false
		}
		seen[v] = true 
	}
	return true
}


func main() {
	fmt.Println(AllUnique([]int{1, 2, 3}))       // true
	fmt.Println(AllUnique([]int{1, 2, 2, 3}))    // false
	fmt.Println(AllUnique([]string{"a", "b"}))   // true
	fmt.Println(AllUnique([]string{"a", "a"}))   // false
	fmt.Println(AllUnique([]rune{}))             // true (empty)
	fmt.Println(AllUnique([]string(nil)))        // true (nil slice)
}