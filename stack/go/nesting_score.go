package stack

// NestingScore computes score of bracket string per rules.
func NestingScore(brackets string) int {
	stack := []int{0}
	for _, ch := range brackets {
		if ch == '[' {
			stack = append(stack, 0)
		} else {
			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			if top == 0 {
				stack[len(stack)-1]++
			} else {
				stack[len(stack)-1] += 2 * top
			}
		}
	}
	return stack[0]
}
