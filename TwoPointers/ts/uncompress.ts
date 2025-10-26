export function uncompress(s: string): string {
  const result: string[] = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (j < s.length) {
      const code = s.charCodeAt(j);
      if (code < 48 || code > 57) break;
      j += 1;
    }
    const count = Number(s.slice(i, j));
    const char = s[j];
    result.push(char.repeat(count));
    i = j + 1;
  }

  return result.join("");
}
