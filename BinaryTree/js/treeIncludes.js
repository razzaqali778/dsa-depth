class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const treeIncludes =(root, target)=>{
    if(root === null) return false
    const stack = [root]

    while(stack.length > 0){
        const node = stack.pop()

        if(node.val === target) return true

        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }

    return false
}


const treeIncludesBFS=(root, target)=>{
     if(root === null) return false
    const queue = [root]

    while(queue.length > 0){
        const node = queue.shift()

        if(node.val === target) return true

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

    return false
}

const treeIncludesRecruss=(root, target)=>{
    if(root === null) return false

    if(root.val === target) return true

  return treeIncludesRecruss(root.left, target) || treeIncludesRecruss(root.right, target)
}