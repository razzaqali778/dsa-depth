const treeLevels = (root) => {
  if (root === null) return [];

  const levels = [];
  const queue = [{ node: root, levelNum: 0 }];
  while (queue.length > 0) {
    const { node, levelNum } = queue.shift();

    if (levels.length === levelNum) {
      levels[levelNum] = [node.val];
    } else {
      levels[levelNum].push(node.val);
    }

    if (node.left !== null) queue.push({ node: node.left, levelNum: levelNum + 1 });
    if (node.right !== null) queue.push({ node: node.right, levelNum: levelNum + 1 });
  }

  return levels;
};


const treeLevels = (root) => {
  const levels = [];
  _treeLevels(root, levels, 0);
  return levels;
};

const _treeLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  _treeLevels(root.left, levels, levelNum + 1);
  _treeLevels(root.right, levels, levelNum + 1);
};
