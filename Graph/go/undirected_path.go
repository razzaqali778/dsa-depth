package graph

// UndirectedPath reports whether there is a path between src and dst in an undirected graph.
func UndirectedPath(edges [][2]string, src, dst string) bool {
	g := BuildUndirectedGraph(edges)
	visited := map[string]struct{}{}
	return undirectedDFS(g, src, dst, visited)
}

func undirectedDFS(g Graph, node, dst string, visited map[string]struct{}) bool {
	if node == dst {
		return true
	}
	if _, seen := visited[node]; seen {
		return false
	}
	visited[node] = struct{}{}

	for _, neighbor := range g[node] {
		if undirectedDFS(g, neighbor, dst, visited) {
			return true
		}
	}
	return false
}
