package binarytree

// PathFinder returns the path from root to target, if it exists.
func PathFinder(root *TreeNode, target int) ([]int, bool) {
	path := buildPath(root, target)
	if path == nil {
		return nil, false
	}

	for i, j := 0, len(path)-1; i < j; i, j = i+1, j-1 {
		path[i], path[j] = path[j], path[i]
	}
	return path, true
}

func buildPath(node *TreeNode, target int) []int {
	if node == nil {
		return nil
	}
	if node.Val == target {
		return []int{node.Val}
	}

	if left := buildPath(node.Left, target); left != nil {
		return append(left, node.Val)
	}
	if right := buildPath(node.Right, target); right != nil {
		return append(right, node.Val)
	}
	return nil
}
