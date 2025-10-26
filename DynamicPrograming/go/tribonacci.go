package dynamicprogramming

// Tribonacci returns nth tribonacci number.
func Tribonacci(n int, memo map[int]int) int {
	if memo == nil {
		memo = make(map[int]int)
	}
	if n == 0 {
		return 0
	}
	if n == 1 || n == 2 {
		return 1
	}
	if val, ok := memo[n]; ok {
		return val
	}
	memo[n] = Tribonacci(n-1, memo) + Tribonacci(n-2, memo) + Tribonacci(n-3, memo)
	return memo[n]
}
