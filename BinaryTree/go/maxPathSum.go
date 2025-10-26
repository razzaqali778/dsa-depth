package binarytree

// MaxPathSum returns the maximum root-to-leaf path sum.
func MaxPathSum(root *TreeNode) int {
	if root == nil {
		return minInt
	}
	if root.Left == nil && root.Right == nil {
		return root.Val
	}

	left := MaxPathSum(root.Left)
	right := MaxPathSum(root.Right)
	if left > right {
		return root.Val + left
	}
	return root.Val + right
}
