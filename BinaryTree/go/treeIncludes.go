package binarytree

// TreeIncludes reports whether target exists in the tree.
func TreeIncludes(root *TreeNode, target int) bool {
	if root == nil {
		return false
	}

	queue := []*TreeNode{root}
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]

		if node.Val == target {
			return true
		}
		if node.Left != nil {
			queue = append(queue, node.Left)
		}
		if node.Right != nil {
			queue = append(queue, node.Right)
		}
	}
	return false
}
