export function isSubsequence(target: string, source: string): boolean {
  let i = 0;
  let j = 0;

  while (i < target.length && j < source.length) {
    if (target[i] === source[j]) {
      i += 1;
    }
    j += 1;
  }

  return i === target.length;
}
