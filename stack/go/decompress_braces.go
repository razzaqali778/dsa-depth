package stack

import "strings"

// DecompressBraces expands patterns like 3{ab}.
func DecompressBraces(s string) string {
	stack := make([]string, 0, len(s))
	for _, ch := range s {
		if ch >= '0' && ch <= '9' {
			stack = append(stack, string(ch))
			continue
		}
		if ch == '{' {
			continue
		}
		if ch == '}' {
			segment := strings.Builder{}
			for len(stack) > 0 {
				top := stack[len(stack)-1]
				if len(top) == 1 && top[0] >= '0' && top[0] <= '9' {
					break
				}
				segment.WriteString(top)
				stack = stack[:len(stack)-1]
			}
			reversed := reverseString(segment.String())
			repeatCount := int(stack[len(stack)-1][0] - '0')
			stack = stack[:len(stack)-1]
			stack = append(stack, strings.Repeat(reversed, repeatCount))
		} else {
			stack = append(stack, string(ch))
		}
	}
	return strings.Join(stack, "")
}

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
