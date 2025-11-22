/**
 * Sorting algorithms in JS with brief usage notes.
 * All functions return a new sorted array unless noted.
 */

// O(n^2) in-place learning algorithm; good for teaching swap mechanics.
function bubbleSort(nums) {
  const arr = nums.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// O(n^2); repeatedly selects the minimum for the current position.
function selectionSort(nums) {
  const arr = nums.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// O(n^2) worst; stable; great for nearly sorted input.
function insertionSort(nums) {
  const arr = nums.slice();
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// O(n log n); stable; divide and conquer.
function mergeSort(nums) {
  if (nums.length <= 1) return nums.slice();
  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) merged.push(left[i++]);
    else merged.push(right[j++]);
  }
  return merged.concat(left.slice(i)).concat(right.slice(j));
}

// Avg O(n log n); in-place; not stable; choose mid pivot to reduce worst-case.
function quickSort(nums) {
  const arr = nums.slice();
  quickSortInPlace(arr, 0, arr.length - 1);
  return arr;
}

function quickSortInPlace(arr, lo, hi) {
  if (lo >= hi) return;
  const pivot = arr[Math.floor((lo + hi) / 2)];
  let i = lo;
  let j = hi;
  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  if (lo < j) quickSortInPlace(arr, lo, j);
  if (i < hi) quickSortInPlace(arr, i, hi);
}

// O(n log n); in-place heap; not stable.
function heapSort(nums) {
  const arr = nums.slice();
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  for (let end = n - 1; end > 0; end--) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    heapify(arr, end, 0);
  }
  return arr;
}

function heapify(arr, size, root) {
  let largest = root;
  const left = 2 * root + 1;
  const right = 2 * root + 2;
  if (left < size && arr[left] > arr[largest]) largest = left;
  if (right < size && arr[right] > arr[largest]) largest = right;
  if (largest !== root) {
    [arr[root], arr[largest]] = [arr[largest], arr[root]];
    heapify(arr, size, largest);
  }
}

// O(n + k); stable; works when range (k) is small compared to n.
function countingSort(nums, maxValue) {
  if (nums.length === 0) return [];
  const max = maxValue !== undefined ? maxValue : Math.max(...nums);
  const count = Array(max + 1).fill(0);
  nums.forEach((num) => count[num]++);
  const result = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result.push(i);
      count[i]--;
    }
  }
  return result;
}

// O(d * (n + b)) LSD radix (base 10) for non-negative integers.
function radixSort(nums) {
  if (nums.length === 0) return [];
  let arr = nums.slice();
  const maxNum = Math.max(...arr);
  let exp = 1;
  while (Math.floor(maxNum / exp) > 0) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const num of arr) {
      const digit = Math.floor(num / exp) % 10;
      buckets[digit].push(num);
    }
    arr = [].concat(...buckets);
    exp *= 10;
  }
  return arr;
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
  countingSort,
  radixSort,
};

/*
Example quick checks:
const sample = [5, 1, 4, 2, 8];
console.log(bubbleSort(sample));   // [1,2,4,5,8]
console.log(mergeSort(sample));    // [1,2,4,5,8]
console.log(quickSort(sample));    // [1,2,4,5,8]
console.log(countingSort([4,1,3,4,3], 4)); // [1,3,3,4,4]
*/
