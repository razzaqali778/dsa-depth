package graph

// ConnectedComponentsCount returns number of connected components in an undirected graph.
func ConnectedComponentsCount(g Graph) int {
	visited := map[string]struct{}{}
	count := 0
	for node := range g {
		if exploreComponent(g, node, visited) {
			count++
		}
	}
	return count
}

func exploreComponent(g Graph, node string, visited map[string]struct{}) bool {
	if _, seen := visited[node]; seen {
		return false
	}
	visited[node] = struct{}{}

	for _, neighbor := range g[node] {
		exploreComponent(g, neighbor, visited)
	}
	return true
}
