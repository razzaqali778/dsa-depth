export function pairedParentheses(s: string): boolean {
  let balance = 0;
  for (const ch of s) {
    if (ch === '(') {
      balance += 1;
    } else if (ch === ')') {
      balance -= 1;
      if (balance < 0) return false;
    }
  }
  return balance === 0;
}
