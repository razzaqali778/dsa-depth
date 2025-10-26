package binarytree

// LeafList returns the values of every leaf from left to right.
func LeafList(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	var leaves []int
	collectLeaves(root, &leaves)
	return leaves
}

func collectLeaves(node *TreeNode, leaves *[]int) {
	if node == nil {
		return
	}
	if node.Left == nil && node.Right == nil {
		*leaves = append(*leaves, node.Val)
		return
	}
	collectLeaves(node.Left, leaves)
	collectLeaves(node.Right, leaves)
}
