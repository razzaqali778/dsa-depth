package binarytree

// AllTreePaths returns every root-to-leaf path.
func AllTreePaths(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}

	var paths [][]int
	buildPaths(root, nil, &paths)
	return paths
}

func buildPaths(node *TreeNode, current []int, paths *[][]int) {
	if node == nil {
		return
	}

	current = append(current, node.Val)
	if node.Left == nil && node.Right == nil {
		path := make([]int, len(current))
		copy(path, current)
		*paths = append(*paths, path)
		return
	}

	buildPaths(node.Left, current, paths)
	buildPaths(node.Right, current, paths)
}
