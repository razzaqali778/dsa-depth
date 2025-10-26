package binarytree

// BottomRightValue returns the value of the last node visited in a BFS traversal.
func BottomRightValue(root *TreeNode) int {
	if root == nil {
		return 0
	}

	queue := []*TreeNode{root}
	var current *TreeNode

	for len(queue) > 0 {
		current = queue[0]
		queue = queue[1:]

		if current.Left != nil {
			queue = append(queue, current.Left)
		}
		if current.Right != nil {
			queue = append(queue, current.Right)
		}
	}

	return current.Val
}
