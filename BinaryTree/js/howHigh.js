const howHigh =(root)=>{
    if(root === null) return -1

    const leftHeight = howHigh(root.left)
    const rightHeight = howHigh(root.left)


    return 1 + Math.max(leftHeight, rightHeight)
}