
export function reverseString(input: string): string {
  if (input.length === 0) {
    return "";
  }
  return reverseString(input.slice(1)) + input[0];
}
