export function sumPossible(amount: number, numbers: number[], memo: Record<number, boolean> = {}): boolean {
  if (amount === 0) return true;
  if (amount < 0) return false;
  if (Object.prototype.hasOwnProperty.call(memo, amount)) return memo[amount];

  for (const num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
}
