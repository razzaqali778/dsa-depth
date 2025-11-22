/**
 * Bit manipulation tricks and helpers.
 */

function singleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}

function missingNumber(nums) {
  let xor = 0;
  for (let i = 0; i <= nums.length; i++) xor ^= i;
  for (const num of nums) xor ^= num;
  return xor;
}

function setBit(x, i) {
  return x | (1 << i);
}

function clearBit(x, i) {
  return x & ~(1 << i);
}

function toggleBit(x, i) {
  return x ^ (1 << i);
}

function countBits(x) {
  let count = 0;
  while (x) {
    x &= x - 1; // drops lowest set bit
    count++;
  }
  return count;
}

function isPowerOfTwo(x) {
  return x > 0 && (x & (x - 1)) === 0;
}

// Generate all subsets via bitmask.
function subsets(nums) {
  const res = [];
  const total = 1 << nums.length;
  for (let mask = 0; mask < total; mask++) {
    const set = [];
    for (let i = 0; i < nums.length; i++) {
      if (mask & (1 << i)) set.push(nums[i]);
    }
    res.push(set);
  }
  return res;
}

// Two single numbers in array where others appear twice.
function twoSingles(nums) {
  let xor = 0;
  for (const num of nums) xor ^= num;
  const diff = xor & -xor; // rightmost set bit
  let a = 0;
  let b = 0;
  for (const num of nums) {
    if (num & diff) a ^= num;
    else b ^= num;
  }
  return [a, b];
}

module.exports = {
  singleNumber,
  missingNumber,
  setBit,
  clearBit,
  toggleBit,
  countBits,
  isPowerOfTwo,
  subsets,
  twoSingles,
};

/*
Examples:
singleNumber([2,3,2]); // 3
missingNumber([0,1,3]); // 2
isPowerOfTwo(16); // true
subsets([1,2]); // [[],[1],[2],[1,2]]
*/
