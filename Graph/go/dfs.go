package graph

// DepthFirstTraversal visits nodes in depth-first order using an explicit stack.
func DepthFirstTraversal(g Graph, source string) []string {
	if source == "" {
		return []string{}
	}

	order := []string{}
	stack := []string{source}
	visited := map[string]struct{}{}

	for len(stack) > 0 {
		idx := len(stack) - 1
		node := stack[idx]
		stack = stack[:idx]

		if _, seen := visited[node]; seen {
			continue
		}
		visited[node] = struct{}{}
		order = append(order, node)

		neighbors := g[node]
		for i := len(neighbors) - 1; i >= 0; i-- {
			stack = append(stack, neighbors[i])
		}
	}

	return order
}
