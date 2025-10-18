const bottomRightValue = (root)=>{
    const queue = [root]
    let current = null

    while (queue.length > 0) {
        current = queue.shift()
        if(current.left !== null) queue.push(current.left)
        if(current.right !== null) queue.push(current.right)      
    }

    return current.val
}