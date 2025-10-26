package binarytree

// LevelAverages returns the average value for each level in the tree.
func LevelAverages(root *TreeNode) []float64 {
	if root == nil {
		return []float64{}
	}

	averages := make([]float64, 0, 8)
	queue := []*TreeNode{root}

	for len(queue) > 0 {
		levelSize := len(queue)
		sum := 0

		for i := 0; i < levelSize; i++ {
			node := queue[0]
			queue = queue[1:]
			sum += node.Val

			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		averages = append(averages, float64(sum)/float64(levelSize))
	}

	return averages
}
