const binarySearch = (numbers, target) => {
  let lo = 0;
  let hi = numbers.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (target < numbers[mid]) {
      hi = mid - 1;
    } else if (target > numbers[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};