const validCompound = (compound, elements, i = 0, memo = {}) => {
  if (i === compound.length) {
    return true;
  }

  if (i in memo) {
    return memo[i];
  }

  for (let ele of elements) {
    if (compound.startsWith(ele.toLowerCase(), i)) {
      if (validCompound(compound, elements, i + ele.length, memo)) {
        memo[i] = true;
        return true;
      }
    }
  }

  memo[i] = false;
  return false;
};
