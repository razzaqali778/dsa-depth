export function maxValue(numbers: number[]): number {
  let max = -Infinity;
  for (const num of numbers) {
    if (num > max) max = num;
  }
  return max;
}