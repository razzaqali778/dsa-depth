package graph

// ShortestPath returns the minimum number of edges between nodeA and nodeB, or -1 if unreachable.
type nodeDistance struct {
	node     string
	distance int
}

func ShortestPath(edges [][2]string, nodeA, nodeB string) int {
	g := BuildUndirectedGraph(edges)
	queue := []nodeDistance{{node: nodeA, distance: 0}}
	visited := map[string]struct{}{nodeA: {}}

	for len(queue) > 0 {
		item := queue[0]
		queue = queue[1:]
		node := item.node
		distance := item.distance

		if node == nodeB {
			return distance
		}
		for _, neighbor := range g[node] {
			if _, seen := visited[neighbor]; seen {
				continue
			}
			visited[neighbor] = struct{}{}
			queue = append(queue, nodeDistance{node: neighbor, distance: distance + 1})
		}
	}
	return -1
}
