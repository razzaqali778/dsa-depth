export function compress(s: string): string {
  if (!s.length) return "";

  const result: string[] = [];
  let i = 0;
  while (i < s.length) {
    let j = i + 1;
    while (j < s.length && s[j] === s[i]) {
      j += 1;
    }
    const count = j - i;
    if (count === 1) {
      result.push(s[i]);
    } else {
      result.push(String(count), s[i]);
    }
    i = j;
  }

  return result.join("");
}
