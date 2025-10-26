export function countCompounds(compound: string, elements: string[]): number {
  const memo = new Map<number, number>();
  const lowerElements = elements.map((el) => el.toLowerCase());
  const lowerCompound = compound.toLowerCase();

  const dfs = (i: number): number => {
    if (i === lowerCompound.length) return 1;
    if (memo.has(i)) return memo.get(i)!;

    let count = 0;
    for (const element of lowerElements) {
      if (lowerCompound.startsWith(element, i)) {
        count += dfs(i + element.length);
      }
    }

    memo.set(i, count);
    return count;
  };

  return dfs(0);
}
