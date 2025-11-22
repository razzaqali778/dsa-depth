/**
 * Dynamic Programming patterns with memoization and tabulation examples.
 */

// 1D DP: Fibonacci with memo (top-down) and tabulation (bottom-up).
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

function fibTab(n) {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

// Climbing stairs: identical to Fibonacci.
function climbStairs(n) {
  return fibTab(n + 1);
}

// House Robber: max non-adjacent sum.
function houseRobber(nums) {
  let robPrev = 0;
  let skipPrev = 0;
  for (const num of nums) {
    const robNow = skipPrev + num;
    skipPrev = Math.max(skipPrev, robPrev);
    robPrev = robNow;
  }
  return Math.max(robPrev, skipPrev);
}

// 2D DP: unique paths in grid (only right/down).
function uniquePaths(rows, cols) {
  const dp = Array(rows).fill(0);
  dp[0] = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) dp[j] = 1;
      else dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[cols - 1];
}

// String DP: Longest Common Subsequence.
function lcs(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}

// Edit Distance (Levenshtein).
function editDistance(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

// Subset DP: 0/1 Knapsack.
function knapSack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
      } else dp[i][w] = dp[i - 1][w];
    }
  }
  return dp[n][capacity];
}

// Tree DP example: max path sum between any two nodes.
function maxPathSum(root) {
  let best = -Infinity;
  function dfs(node) {
    if (!node) return 0;
    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    best = Math.max(best, node.val + left + right);
    return node.val + Math.max(left, right);
  }
  dfs(root);
  return best;
}

// DP + Bitmask: Traveling Salesman for small n (<= 12).
function tspBitmask(cost) {
  const n = cost.length;
  const memo = Array.from({ length: 1 << n }, () => Array(n).fill(undefined));
  const ALL = (1 << n) - 1;
  function dp(mask, pos) {
    if (mask === ALL) return cost[pos][0];
    if (memo[mask][pos] !== undefined) return memo[mask][pos];
    let ans = Infinity;
    for (let nxt = 0; nxt < n; nxt++) {
      if ((mask & (1 << nxt)) === 0) {
        ans = Math.min(ans, cost[pos][nxt] + dp(mask | (1 << nxt), nxt));
      }
    }
    memo[mask][pos] = ans;
    return ans;
  }
  return dp(1, 0); // start at node 0
}

module.exports = {
  fibMemo,
  fibTab,
  climbStairs,
  houseRobber,
  uniquePaths,
  lcs,
  editDistance,
  knapSack,
  maxPathSum,
  tspBitmask,
};

/*
Examples:
fibMemo(10); // 55
houseRobber([2,7,9,3,1]); // 12
uniquePaths(3, 7); // 28
lcs("abcde", "ace"); // 3
knapSack([1,3,4,5],[1,4,5,7], 7); // 9
*/
