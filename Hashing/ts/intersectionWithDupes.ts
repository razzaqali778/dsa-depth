export function intersectionWithDupes<T>(first: T[], second: T[]): T[] {
  const count = new Map<T, number>();
  for (const value of first) {
    count.set(value, (count.get(value) ?? 0) + 1);
  }

  const result: T[] = [];
  for (const value of second) {
    const remaining = count.get(value) ?? 0;
    if (remaining > 0) {
      result.push(value);
      count.set(value, remaining - 1);
    }
  }

  return result;
}
