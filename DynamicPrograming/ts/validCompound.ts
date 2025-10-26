export function validCompound(compound: string, elements: string[]): boolean {
  const memo = new Map<number, boolean>();
  const lowerCompound = compound.toLowerCase();
  const lowerElements = elements.map((el) => el.toLowerCase());

  const dfs = (i: number): boolean => {
    if (i === lowerCompound.length) return true;
    if (memo.has(i)) return memo.get(i)!;

    for (const el of lowerElements) {
      if (lowerCompound.startsWith(el, i) && dfs(i + el.length)) {
        memo.set(i, true);
        return true;
      }
    }

    memo.set(i, false);
    return false;
  };

  return dfs(0);
}
