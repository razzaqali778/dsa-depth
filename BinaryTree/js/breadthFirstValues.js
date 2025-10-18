class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const breadThFirstValues =(root)=>{
    if(root === null) return []

    const queue = [root]
    const values = []

    while(queue.length > 0 ){
        const node = queue.shift()
        values.push(node.val)

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

    return values
}