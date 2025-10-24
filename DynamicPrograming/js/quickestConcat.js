const quickestConcat = (s, words) => {
  const result = _quickestConcat(s, words);
  
  if (result === Infinity) {
    return -1;
  } else {
    return result;
  }
};

const _quickestConcat = (s, words, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  
  if (i === s.length) return 0;
  
  let min = Infinity;
  
  for (let word of words) {
    if (s.startsWith(word, i)) {
      const attempt = 1 + _quickestConcat(s, words, i + word.length, memo);
      min = Math.min(min, attempt);
    }
  }
  
  memo[i] = min;
  return min;
};
