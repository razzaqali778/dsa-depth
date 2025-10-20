const leafList =(root)=>{
    if(root === null) return []
    const queue = [root]

    const res = []
    while(queue.length > 0 ){
        const node = queue.shift()

        if(node.left === null && node.right === null){
            res.push(node.val)
        }

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)

    }

    return res
}


const leafList = (root) => {
  const leaves = [];
  fillLeaves(root, leaves);
  return leaves;
};

const fillLeaves = (root, leaves) => {
  if (root === null) return;
  if (root.left === null && root.right === null) leaves.push(root.val);
  fillLeaves(root.left, leaves);
  fillLeaves(root.right, leaves);
};
