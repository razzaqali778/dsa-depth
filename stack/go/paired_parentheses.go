package stack

// PairedParentheses validates parentheses.
func PairedParentheses(s string) bool {
	balance := 0
	for _, ch := range s {
		switch ch {
		case '(':
			balance++
		case ')':
			balance--
			if balance < 0 {
				return false
			}
		}
	}
	return balance == 0
}
