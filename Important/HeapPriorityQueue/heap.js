/**
 * Heap / Priority Queue utilities.
 */

class Heap {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }
  push(val) {
    this.data.push(val);
    this._up(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const end = this.data.pop();
    if (this.data.length) {
      this.data[0] = end;
      this._down(0);
    }
    return top;
  }
  peek() {
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
  _up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.compare(this.data[p], this.data[i]) <= 0) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }
  _down(i) {
    const n = this.data.length;
    while (true) {
      let best = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < n && this.compare(this.data[l], this.data[best]) < 0) best = l;
      if (r < n && this.compare(this.data[r], this.data[best]) < 0) best = r;
      if (best === i) break;
      [this.data[i], this.data[best]] = [this.data[best], this.data[i]];
      i = best;
    }
  }
}

function topKElements(nums, k) {
  const heap = new Heap((a, b) => a - b); // min-heap
  for (const num of nums) {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  }
  const res = [];
  while (heap.size()) res.push(heap.pop());
  return res.reverse();
}

function kthLargest(nums, k) {
  return topKElements(nums, k)[0];
}

// Median in stream using two heaps.
class MedianFinder {
  constructor() {
    this.low = new Heap((a, b) => b - a); // max-heap via reversed comparator
    this.high = new Heap((a, b) => a - b); // min-heap
  }
  addNum(num) {
    if (!this.low.size() || num <= this.low.peek()) this.low.push(num);
    else this.high.push(num);
    if (this.low.size() > this.high.size() + 1) this.high.push(this.low.pop());
    else if (this.high.size() > this.low.size()) this.low.push(this.high.pop());
  }
  findMedian() {
    if (this.low.size() === this.high.size()) return (this.low.peek() + this.high.peek()) / 2;
    return this.low.peek();
  }
}

// Task Scheduler with cooldown n: returns minimum intervals.
function leastInterval(tasks, n) {
  const freq = {};
  for (const t of tasks) freq[t] = (freq[t] || 0) + 1;
  const counts = Object.values(freq);
  const max = Math.max(...counts);
  const maxCountTasks = counts.filter((c) => c === max).length;
  return Math.max(tasks.length, (max - 1) * (n + 1) + maxCountTasks);
}

// Merge K sorted arrays.
function mergeKSorted(lists) {
  const heap = new Heap((a, b) => a.value - b.value);
  const res = [];
  lists.forEach((arr, i) => {
    if (arr.length) heap.push({ value: arr[0], from: i, idx: 0 });
  });
  while (heap.size()) {
    const { value, from, idx } = heap.pop();
    res.push(value);
    if (idx + 1 < lists[from].length) {
      heap.push({ value: lists[from][idx + 1], from, idx: idx + 1 });
    }
  }
  return res;
}

module.exports = {
  Heap,
  topKElements,
  kthLargest,
  MedianFinder,
  leastInterval,
  mergeKSorted,
};

/*
Examples:
topKElements([3,2,1,5,6,4], 2); // [6,5]
const mf = new MedianFinder(); [1,2,3,4].forEach(n=>mf.addNum(n)); mf.findMedian(); // 2.5
leastInterval(["A","A","A","B","B","B"], 2); // 8
mergeKSorted([[1,4,5],[1,3,4],[2,6]]); // [1,1,2,3,4,4,5,6]
*/
