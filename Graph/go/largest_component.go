package graph

// LargestComponent returns size of the largest connected component.
func LargestComponent(g Graph) int {
	visited := map[string]struct{}{}
	maxSize := 0
	for node := range g {
		size := componentSize(g, node, visited)
		if size > maxSize {
			maxSize = size
		}
	}
	return maxSize
}

func componentSize(g Graph, node string, visited map[string]struct{}) int {
	if _, seen := visited[node]; seen {
		return 0
	}
	visited[node] = struct{}{}
	size := 1
	for _, neighbor := range g[node] {
		size += componentSize(g, neighbor, visited)
	}
	return size
}
