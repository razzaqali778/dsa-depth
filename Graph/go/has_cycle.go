package graph

// HasCycle detects a cycle in a directed graph.
func HasCycle(g Graph) bool {
	visiting := map[string]struct{}{}
	visited := map[string]struct{}{}

	for node := range g {
		if cycleDFS(g, node, visiting, visited) {
			return true
		}
	}
	return false
}

func cycleDFS(g Graph, node string, visiting, visited map[string]struct{}) bool {
	if _, done := visited[node]; done {
		return false
	}
	if _, active := visiting[node]; active {
		return true
	}

	visiting[node] = struct{}{}
	for _, neighbor := range g[node] {
		if cycleDFS(g, neighbor, visiting, visited) {
			return true
		}
	}
	delete(visiting, node)
	visited[node] = struct{}{}
	return false
}
