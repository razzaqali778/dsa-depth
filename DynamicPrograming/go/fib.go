package dynamicprogramming

// Fib computes the n-th fibonacci number using memoization.
func Fib(n int, memo map[int]int) int {
	if memo == nil {
		memo = make(map[int]int)
	}
	if n == 0 || n == 1 {
		return n
	}
	if val, ok := memo[n]; ok {
		return val
	}
	memo[n] = Fib(n-1, memo) + Fib(n-2, memo)
	return memo[n]
}
