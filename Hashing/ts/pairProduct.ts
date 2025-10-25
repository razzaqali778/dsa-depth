export function pairProduct(numbers: number[], targetProduct: number): [number, number] {
  const indexMap = new Map<number, number>();

  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    if (num === 0 && targetProduct !== 0) {
      indexMap.set(num, i);
      continue;
    }
    if (num !== 0 && targetProduct % num !== 0) {
      indexMap.set(num, i);
      continue;
    }
    const complement = num === 0 ? 0 : targetProduct / num;
    if (indexMap.has(complement)) {
      return [indexMap.get(complement)!, i];
    }
    indexMap.set(num, i);
  }

  throw new Error("Pair not found");
}
