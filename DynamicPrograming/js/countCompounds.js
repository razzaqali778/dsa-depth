const countCompounds = (compound, elements, idx = 0, memo = {}) => {
  if (idx === compound.length) {
    return 1;
  }

  if (idx in memo) {
    return memo[idx];
  }

  let count = 0;
  for (let ele of elements) {
    if (compound.startsWith(ele.toLowerCase(), idx)) {
      count += countCompounds(compound, elements, idx + ele.length, memo);
    }
  }

  memo[idx] = count;
  return count;
};
