/**
 * Recursion and backtracking templates.
 */

// Generate all subsets (power set).
function subsets(nums) {
  const res = [];
  function backtrack(start, path) {
    res.push(path.slice());
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }
  backtrack(0, []);
  return res;
}

// Permutations of array.
function permutations(nums) {
  const res = [];
  function backtrack(path, used) {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }
  backtrack([], Array(nums.length).fill(false));
  return res;
}

// Combination Sum (can reuse elements).
function combinationSum(candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  function backtrack(start, remain, path) {
    if (remain === 0) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i < candidates.length && candidates[i] <= remain; i++) {
      path.push(candidates[i]);
      backtrack(i, remain - candidates[i], path);
      path.pop();
    }
  }
  backtrack(0, target, []);
  return res;
}

// N-Queens: returns board layouts using '.' and 'Q'.
function solveNQueens(n) {
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  const res = [];
  function backtrack(r) {
    if (r === n) {
      res.push(board.map((row) => row.join("")));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;
      cols.add(c);
      diag1.add(r - c);
      diag2.add(r + c);
      board[r][c] = "Q";
      backtrack(r + 1);
      board[r][c] = ".";
      cols.delete(c);
      diag1.delete(r - c);
      diag2.delete(r + c);
    }
  }
  backtrack(0);
  return res;
}

// Word Search: DFS with visited tracking.
function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  function dfs(r, c, idx) {
    if (idx === word.length) return true;
    if (r < 0 || c < 0 || r >= rows || c >= cols || visited[r][c] || board[r][c] !== word[idx]) {
      return false;
    }
    visited[r][c] = true;
    const found =
      dfs(r + 1, c, idx + 1) ||
      dfs(r - 1, c, idx + 1) ||
      dfs(r, c + 1, idx + 1) ||
      dfs(r, c - 1, idx + 1);
    visited[r][c] = false;
    return found;
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
}

// Generate Parentheses: balanced strings of size 2n.
function generateParenthesis(n) {
  const res = [];
  function backtrack(open, close, path) {
    if (path.length === 2 * n) {
      res.push(path.join(""));
      return;
    }
    if (open < n) {
      path.push("(");
      backtrack(open + 1, close, path);
      path.pop();
    }
    if (close < open) {
      path.push(")");
      backtrack(open, close + 1, path);
      path.pop();
    }
  }
  backtrack(0, 0, []);
  return res;
}

module.exports = {
  subsets,
  permutations,
  combinationSum,
  solveNQueens,
  exist,
  generateParenthesis,
};

/*
Examples:
subsets([1,2]); // [[],[1],[2],[1,2]]
permutations([1,2,3]); // 6 permutations
solveNQueens(4); // 2 layouts
exist([['A','B'],['C','D']], 'ABCD'); // false
generateParenthesis(3); // ["((()))","(()())","(())()","()(())","()()()"]
*/
