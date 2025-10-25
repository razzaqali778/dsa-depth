export function palindrome(input: string): boolean {
  if (input.length <= 1) {
    return true;
  }
  if (input[0] !== input[input.length - 1]) {
    return false;
  }
  return palindrome(input.slice(1, -1));
}
