export function pairSum(numbers: number[], targetSum: number): [number, number] {
  const indexByValue = new Map<number, number>();

  for (let i = 0; i < numbers.length; i += 1) {
    const value = numbers[i];
    const complement = targetSum - value;
    if (indexByValue.has(complement)) {
      return [indexByValue.get(complement)!, i];
    }
    indexByValue.set(value, i);
  }

  throw new Error("Pair not found");
}
