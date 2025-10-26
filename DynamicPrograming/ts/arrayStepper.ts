export function arrayStepper(numbers: number[]): boolean {
  const memo = new Map<number, boolean>();

  const dfs = (i: number): boolean => {
    if (memo.has(i)) return memo.get(i)!;
    if (i >= numbers.length - 1) return true;

    const maxStep = numbers[i];
    for (let step = 1; step <= maxStep; step += 1) {
      if (dfs(i + step)) {
        memo.set(i, true);
        return true;
      }
    }

    memo.set(i, false);
    return false;
  };

  return dfs(0);
}
