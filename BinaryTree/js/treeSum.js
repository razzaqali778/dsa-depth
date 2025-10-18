class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


const treeSumDFT =(root)=>{
    if(root === null) return 0

    const stack = [root]
    const sum = 0

    while (stack.length > 0) {
        const node = stack.pop()
        sum += node.val

        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)

    }

    return sum
}

const treeSumBFS =(root)=>{
    if(root === null) return 0

    const queue = [root]
    const sum = 0

    while(queue.length > 0){
        const node = queue.shift()
        
        sum += node.val

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

    return sum
}

const treeSumRecrus =(root)=>{
    if(root === null) return 0

    const leftSum = treeSumRecrus(root.left)
    const rightSum = treeSumRecrus(root.right)

    return root.val + leftSum + rightSum
}