const arrayStepper = (numbers, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  
  if (i >= numbers.length - 1) return true;

  const maxStep = numbers[i];
  for (let step = 1; step <= maxStep; step += 1) {
    if (arrayStepper(numbers, i + step, memo) === true) {
      memo[i] = true;
      return true;
    };
  }
  
  memo[i] = false;
  return false;
};