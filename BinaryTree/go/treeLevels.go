package binarytree

// TreeLevels groups values by their depth starting at 0.
func TreeLevels(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}

	var levels [][]int
	type entry struct {
		node  *TreeNode
		level int
	}
	queue := []entry{{node: root, level: 0}}

	for len(queue) > 0 {
		item := queue[0]
		queue = queue[1:]

		if len(levels) == item.level {
			levels = append(levels, []int{})
		}
		levels[item.level] = append(levels[item.level], item.node.Val)

		if item.node.Left != nil {
			queue = append(queue, entry{node: item.node.Left, level: item.level + 1})
		}
		if item.node.Right != nil {
			queue = append(queue, entry{node: item.node.Right, level: item.level + 1})
		}
	}

	return levels
}
