/**
 * Greedy strategies with classic examples.
 */

// Activity selection / Interval scheduling: choose max non-overlapping by earliest finish.
function selectMaxActivities(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  const chosen = [];
  let lastEnd = -Infinity;
  for (const [start, end] of intervals) {
    if (start >= lastEnd) {
      chosen.push([start, end]);
      lastEnd = end;
    }
  }
  return chosen;
}

// Huffman coding: returns code table given frequency map {char: freq}.
function huffmanCodes(freqMap) {
  const nodes = Object.entries(freqMap).map(([ch, freq]) => ({ ch, freq }));
  if (nodes.length === 0) return {};
  const cmp = (a, b) => a.freq - b.freq;
  nodes.sort(cmp);
  while (nodes.length > 1) {
    nodes.sort(cmp);
    const left = nodes.shift();
    const right = nodes.shift();
    nodes.push({ freq: left.freq + right.freq, left, right });
  }
  const root = nodes[0];
  const codes = {};
  (function dfs(node, code) {
    if (!node.left && !node.right) {
      codes[node.ch] = code || "0"; // single char edge-case
      return;
    }
    dfs(node.left, code + "0");
    dfs(node.right, code + "1");
  })(root, "");
  return codes;
}

// Jump Game: can reach end using farthest reachable index.
function canReachEnd(nums) {
  let farthest = 0;
  for (let i = 0; i <= farthest && i < nums.length; i++) {
    farthest = Math.max(farthest, i + nums[i]);
  }
  return farthest >= nums.length - 1;
}

// Minimum platforms (trains): sweep line on arrival/departure times.
function minPlatforms(arrivals, departures) {
  arrivals = arrivals.slice().sort((a, b) => a - b);
  departures = departures.slice().sort((a, b) => a - b);
  let platforms = 0;
  let maxPlatforms = 0;
  let i = 0;
  let j = 0;
  while (i < arrivals.length && j < departures.length) {
    if (arrivals[i] <= departures[j]) {
      platforms++;
      maxPlatforms = Math.max(maxPlatforms, platforms);
      i++;
    } else {
      platforms--;
      j++;
    }
  }
  return maxPlatforms;
}

// Fractional knapsack: maximize value by value/weight ratio.
function fractionalKnapsack(items, capacity) {
  // items: [{value, weight}]
  const sorted = items.slice().sort((a, b) => b.value / b.weight - a.value / a.weight);
  let total = 0;
  let remain = capacity;
  for (const item of sorted) {
    if (remain <= 0) break;
    if (item.weight <= remain) {
      total += item.value;
      remain -= item.weight;
    } else {
      const fraction = remain / item.weight;
      total += item.value * fraction;
      remain = 0;
    }
  }
  return total;
}

module.exports = {
  selectMaxActivities,
  huffmanCodes,
  canReachEnd,
  minPlatforms,
  fractionalKnapsack,
};

/*
Examples:
selectMaxActivities([[1,2],[3,4],[0,6],[5,7],[8,9]]); // greedy by end time
canReachEnd([2,3,1,1,4]); // true
minPlatforms([900, 940, 950], [910, 1200, 1120]); // 2
fractionalKnapsack([{value:60,weight:10},{value:100,weight:20},{value:120,weight:30}], 50); // 240
*/
