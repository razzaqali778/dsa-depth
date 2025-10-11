package main

import (
	"fmt"
)

func fizzBuzz(n int) []any {
	result := make([]any, 0, n)
	for i := 1; i <= n; i++ {
		switch {
		case i%15 == 0:
			result = append(result, "fizzbuzz")
		case i%3 == 0:
			result = append(result, "fizz")
		case i%5 == 0:
			result = append(result, "buzz")
		default:
			result = append(result, i)
		}
	}
	return result
}

func main() {
	fmt.Println(fizzBuzz(16))
}