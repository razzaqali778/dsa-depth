export function nestingScore(brackets: string): number {
  const stack: number[] = [0];
  for (const ch of brackets) {
    if (ch === '[') {
      stack.push(0);
    } else {
      const top = stack.pop() ?? 0;
      if (top === 0) {
        stack[stack.length - 1] += 1;
      } else {
        stack[stack.length - 1] += 2 * top;
      }
    }
  }
  return stack[0];
}
