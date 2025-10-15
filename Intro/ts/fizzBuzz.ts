export function fizzBuzz(n: number): Array<number | string> {
  const result: Array<number | string> = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}