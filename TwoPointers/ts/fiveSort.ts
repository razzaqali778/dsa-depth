export function fiveSort(nums: number[]): number[] {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[j] === 5) {
      j -= 1;
      continue;
    }
    if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
      j -= 1;
    } else {
      i += 1;
    }
  }

  return nums;
}
