package graph

// HasPath reports whether dst is reachable from src in a directed graph.
func HasPath(g Graph, src, dst string) bool {
	if src == dst {
		return true
	}
	if _, ok := g[src]; !ok {
		return false
	}
	visited := map[string]struct{}{}
	return hasPathDFS(g, src, dst, visited)
}

func hasPathDFS(g Graph, node, dst string, visited map[string]struct{}) bool {
	if node == dst {
		return true
	}
	if _, seen := visited[node]; seen {
		return false
	}
	visited[node] = struct{}{}

	for _, neighbor := range g[node] {
		if hasPathDFS(g, neighbor, dst, visited) {
			return true
		}
	}
	return false
}
