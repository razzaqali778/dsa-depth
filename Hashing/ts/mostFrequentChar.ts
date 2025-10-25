export function mostFrequentChar(s: string): string {
  const counts: Record<string, number> = {};
  for (const char of s) {
    counts[char] = (counts[char] ?? 0) + 1;
  }

  let best = "";
  let bestCount = -1;
  for (const char of s) {
    const freq = counts[char];
    if (freq > bestCount) {
      best = char;
      bestCount = freq;
    }
  }

  return best;
}
