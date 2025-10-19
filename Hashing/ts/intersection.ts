export function intersection1<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  const added = new Set<T>();
  const out: T[] = [];
  for (const x of arr1) {
    if (!added.has(x) && set2.has(x)) {
      added.add(x);
      out.push(x);
    }
  }
  return out;
}