package binarytree

// HowHigh returns the height of the tree where a leaf is level 0.
func HowHigh(root *TreeNode) int {
	if root == nil {
		return -1
	}
	left := HowHigh(root.Left)
	right := HowHigh(root.Right)
	if left > right {
		return left + 1
	}
	return right + 1
}
