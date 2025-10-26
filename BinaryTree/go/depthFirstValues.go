package binarytree

// DepthFirstValues iteratively traverses the tree in pre-order.
func DepthFirstValues(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	values := make([]int, 0, 16)
	stack := []*TreeNode{root}

	for len(stack) > 0 {
		last := len(stack) - 1
		node := stack[last]
		stack = stack[:last]

		values = append(values, node.Val)
		if node.Right != nil {
			stack = append(stack, node.Right)
		}
		if node.Left != nil {
			stack = append(stack, node.Left)
		}
	}

	return values
}
