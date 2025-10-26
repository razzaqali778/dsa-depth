export function reverseSomeChars(input: string, chars: string[]): string {
  const set = new Set(chars);
  const stack: string[] = [];
  for (const ch of input) {
    if (set.has(ch)) {
      stack.push(ch);
    }
  }

  const result: string[] = [];
  for (const ch of input) {
    if (set.has(ch)) {
      result.push(stack.pop()!);
    } else {
      result.push(ch);
    }
  }

  return result.join('');
}
