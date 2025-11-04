const subarraySumCount = (numbers, targetSum) => {
  const prefixSums = [0];
  let total = 0;
  for (let num of numbers) {
    total += num;
    prefixSums.push(total);
  }

  const seen = {};
  let count = 0;
  for (let current of prefixSums) {
    const complement = current - targetSum;
    if (complement in seen) {
      count += seen[complement];
    }
    if (!(current in seen)) {
      seen[current] = 0;
    }
    seen[current] += 1;
  }
  return count;
};

