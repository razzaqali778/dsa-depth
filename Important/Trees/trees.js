/**
 * Binary tree utilities and traversals.
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function inorder(root, res = []) {
  if (!root) return res;
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
  return res;
}

function preorder(root, res = []) {
  if (!root) return res;
  res.push(root.val);
  preorder(root.left, res);
  preorder(root.right, res);
  return res;
}

function postorder(root, res = []) {
  if (!root) return res;
  postorder(root.left, res);
  postorder(root.right, res);
  res.push(root.val);
  return res;
}

function levelOrder(root) {
  if (!root) return [];
  const res = [];
  const q = [root];
  while (q.length) {
    const node = q.shift();
    res.push(node.val);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  return res;
}

// Diameter: longest path between any two nodes.
function diameter(root) {
  let best = 0;
  function depth(node) {
    if (!node) return 0;
    const left = depth(node.left);
    const right = depth(node.right);
    best = Math.max(best, left + right);
    return Math.max(left, right) + 1;
  }
  depth(root);
  return best;
}

// Lowest Common Ancestor in binary tree.
function lca(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lca(root.left, p, q);
  const right = lca(root.right, p, q);
  if (left && right) return root;
  return left || right;
}

// Serialize/Deserialize using level-order with null markers.
function serialize(root) {
  if (!root) return [];
  const res = [];
  const q = [root];
  while (q.length) {
    const node = q.shift();
    if (node) {
      res.push(node.val);
      q.push(node.left);
      q.push(node.right);
    } else {
      res.push(null);
    }
  }
  // trim trailing nulls
  while (res[res.length - 1] === null) res.pop();
  return res;
}

function deserialize(arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const q = [root];
  let idx = 1;
  while (q.length && idx < arr.length) {
    const node = q.shift();
    const leftVal = arr[idx++];
    if (leftVal !== null && leftVal !== undefined) {
      node.left = new TreeNode(leftVal);
      q.push(node.left);
    }
    const rightVal = arr[idx++];
    if (rightVal !== null && rightVal !== undefined) {
      node.right = new TreeNode(rightVal);
      q.push(node.right);
    }
  }
  return root;
}

module.exports = {
  TreeNode,
  inorder,
  preorder,
  postorder,
  levelOrder,
  diameter,
  lca,
  serialize,
  deserialize,
};

/*
Example:
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
inorder(root); // [2,1,4,3,5]
diameter(root); // 3 edges path
const data = serialize(root); // [1,2,3,null,null,4,5]
const rebuilt = deserialize(data);
*/
