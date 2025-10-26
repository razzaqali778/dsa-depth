package graph

// BreadthFirstTraversal returns the order of nodes visited during a BFS.
func BreadthFirstTraversal(g Graph, source string) []string {
	if source == "" {
		return []string{}
	}

	order := []string{}
	queue := []string{source}
	visited := map[string]struct{}{source: {}}

	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		order = append(order, node)

		for _, neighbor := range g[node] {
			if _, seen := visited[neighbor]; seen {
				continue
			}
			visited[neighbor] = struct{}{}
			queue = append(queue, neighbor)
		}
	}

	return order
}
