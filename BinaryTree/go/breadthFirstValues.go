package binarytree

// BreadthFirstValues returns the node values level by level from left to right.
func BreadthFirstValues(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	values := make([]int, 0, 16)
	queue := []*TreeNode{root}

	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]

		values = append(values, node.Val)
		if node.Left != nil {
			queue = append(queue, node.Left)
		}
		if node.Right != nil {
			queue = append(queue, node.Right)
		}
	}

	return values
}
