def LeafList(root):
    if root is None:
        return []
    
    leaves = []

    stack = [root]

    while stack:
        current = stack.pop()

        if current.left is None and current.right is None:
            leaves.append(current.val)
        

        if current.right if not None:
            stack.append(current.right)

        if current.left is not None:
            stack.append(current.left)

    return leaves