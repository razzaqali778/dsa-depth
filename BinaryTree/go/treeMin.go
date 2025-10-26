package binarytree

// TreeMin returns the smallest value in the tree (or maxInt for an empty tree).
func TreeMin(root *TreeNode) int {
	if root == nil {
		return maxInt
	}

	leftMin := TreeMin(root.Left)
	rightMin := TreeMin(root.Right)
	if leftMin < rightMin {
		rightMin = leftMin
	}
	if root.Val < rightMin {
		return root.Val
	}
	return rightMin
}
