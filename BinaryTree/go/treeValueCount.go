package binarytree

// TreeValueCount counts how many nodes equal target.
func TreeValueCount(root *TreeNode, target int) int {
	if root == nil {
		return 0
	}
	match := 0
	if root.Val == target {
		match = 1
	}
	return match + TreeValueCount(root.Left, target) + TreeValueCount(root.Right, target)
}
