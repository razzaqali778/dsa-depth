class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = right
    }
}

const depthFirstValues =(root)=>{
    if(root  === null) return []
    const values = []

    const stack = [root]

    while(stack.length > 0){
        const node = stack.pop()
        values.push(node.val)

        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }

    return values
}

const depthFirstValuesRecruss =(root)=>{
    if(root === null) return []

    const leftValues = depthFirstValuesRecruss(root.left)
    const rightValues = depthFirstValuesRecruss(root.right)

    return [root.val, ...leftValues, ...rightValues]
}