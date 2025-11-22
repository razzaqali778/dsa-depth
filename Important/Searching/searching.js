/**
 * Searching algorithms with usage notes.
 */

// O(n) scan; simplest approach.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// O(log n); requires sorted array.
function binarySearch(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

// O(log n) when function is unimodal; splits into thirds.
function ternarySearch(lo, hi, fn) {
  while (hi - lo > 3) {
    const m1 = lo + Math.floor((hi - lo) / 3);
    const m2 = hi - Math.floor((hi - lo) / 3);
    if (fn(m1) < fn(m2)) hi = m2 - 1;
    else lo = m1 + 1;
  }
  let best = lo;
  for (let i = lo + 1; i <= hi; i++) {
    if (fn(i) < fn(best)) best = i;
  }
  return best;
}

// O(log i); doubles range until target <= arr[hi].
function exponentialSearch(arr, target) {
  if (arr.length === 0) return -1;
  if (arr[0] === target) return 0;
  let bound = 1;
  while (bound < arr.length && arr[bound] < target) bound *= 2;
  const left = Math.floor(bound / 2);
  const right = Math.min(bound + 1, arr.length);
  const idx = binarySearch(arr.slice(left, right), target);
  return idx === -1 ? -1 : left + idx;
}

// Binary search on answer space: find minimum ship capacity to ship weights within D days.
function minShipCapacity(weights, days) {
  let lo = Math.max(...weights);
  let hi = weights.reduce((a, b) => a + b, 0);
  const canShip = (cap) => {
    let need = 1;
    let load = 0;
    for (const w of weights) {
      if (load + w > cap) {
        need++;
        load = 0;
      }
      load += w;
    }
    return need <= days;
  };
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (canShip(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}

module.exports = {
  linearSearch,
  binarySearch,
  ternarySearch,
  exponentialSearch,
  minShipCapacity,
};

/*
Examples:
binarySearch([1,3,5,7,9], 5); // 2
ternarySearch(0, 100, x => (x - 42) ** 2); // ~42 (min of convex fn)
minShipCapacity([1,2,3,1,1], 4); // 3
*/
