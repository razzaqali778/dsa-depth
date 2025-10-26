package binarytree

// TreeSum returns the total of every node value in the tree.
func TreeSum(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return root.Val + TreeSum(root.Left) + TreeSum(root.Right)
}
