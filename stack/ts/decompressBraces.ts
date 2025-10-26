export function decompressBraces(input: string): string {
  const stack: (number | string)[] = [];
  for (const ch of input) {
    if (ch >= '0' && ch <= '9') {
      stack.push(Number(ch));
    } else if (ch === '{') {
      continue;
    } else if (ch === '}') {
      let segment = '';
      while (stack.length && typeof stack[stack.length - 1] === 'string') {
        segment = (stack.pop() as string) + segment;
      }
      const count = stack.pop() as number;
      stack.push(segment.repeat(count));
    } else {
      stack.push(ch);
    }
  }
  return stack.join('');
}
