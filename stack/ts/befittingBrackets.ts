export function befittingBrackets(s: string): boolean {
  const stack: string[] = [];
  const matching: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else if (ch in matching) {
      if (stack.pop() !== matching[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
