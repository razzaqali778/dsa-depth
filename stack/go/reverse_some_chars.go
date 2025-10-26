package stack

// ReverseSomeChars reverses only characters present in chars slice.
func ReverseSomeChars(s string, chars []rune) string {
	set := make(map[rune]struct{}, len(chars))
	for _, ch := range chars {
		set[ch] = struct{}{}
	}

	targets := make([]rune, 0)
	for _, ch := range s {
		if _, ok := set[ch]; ok {
			targets = append(targets, ch)
		}
	}

	runes := []rune(s)
	idx := len(targets) - 1
	for i, ch := range runes {
		if _, ok := set[ch]; ok {
			runes[i] = targets[idx]
			idx--
		}
	}
	return string(runes)
}
