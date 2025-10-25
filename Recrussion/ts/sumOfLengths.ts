export function sumOfLengths(strings: string[]): number {
  if (strings.length === 0) {
    return 0;
  }
  const [first, ...rest] = strings;
  return first.length + sumOfLengths(rest);
}
