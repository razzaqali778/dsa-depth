/**
 * Real-world patterns and reusable templates.
 */

// Sliding Window: longest substring with at most K distinct chars.
function longestSubstringKDistinct(s, k) {
  const freq = {};
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    freq[ch] = (freq[ch] || 0) + 1;
    while (Object.keys(freq).length > k) {
      const drop = s[left++];
      freq[drop]--;
      if (freq[drop] === 0) delete freq[drop];
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

// Two Pointers: find pair sum in sorted array.
function twoSumSorted(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum === target) return [i, j];
    if (sum < target) i++;
    else j--;
  }
  return [-1, -1];
}

// Monotonic Stack: next greater element.
function nextGreater(nums) {
  const res = Array(nums.length).fill(-1);
  const stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) stack.pop();
    if (stack.length) res[i] = stack[stack.length - 1];
    stack.push(nums[i]);
  }
  return res;
}

// Monotonic Queue: O(n) sliding window maximum.
function slidingWindowMax(nums, k) {
  const dq = []; // store indices, front is max
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (dq.length && dq[0] <= i - k) dq.shift();
    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();
    dq.push(i);
    if (i >= k - 1) res.push(nums[dq[0]]);
  }
  return res;
}

// Binary Search on Answer: min eating speed for Koko bananas.
function minEatingSpeed(piles, h) {
  let lo = 1;
  let hi = Math.max(...piles);
  const can = (speed) => {
    let time = 0;
    for (const pile of piles) time += Math.ceil(pile / speed);
    return time <= h;
  };
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (can(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}

// Trie for prefix search.
class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.end = true;
  }
  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.end;
  }
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}

module.exports = {
  longestSubstringKDistinct,
  twoSumSorted,
  nextGreater,
  slidingWindowMax,
  minEatingSpeed,
  Trie,
};

/*
Examples:
longestSubstringKDistinct("eceba", 2); // 3 ("ece")
twoSumSorted([1,2,3,4,6], 6); // [1,3]
nextGreater([2,1,2,4,3]); // [4,2,4,-1,-1]
slidingWindowMax([1,3,-1,-3,5,3,6,7], 3); // [3,3,5,5,6,7]
*/
