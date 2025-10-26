package graph

// LongestPath returns the length of the longest path in a directed acyclic graph.
func LongestPath(g Graph) int {
	distance := map[string]int{}
	for node, neighbors := range g {
		if len(neighbors) == 0 {
			distance[node] = 0
		}
	}

	maxDistance := 0
	for node := range g {
		current := traverseDistance(g, node, distance)
		if current > maxDistance {
			maxDistance = current
		}
	}
	return maxDistance
}

func traverseDistance(g Graph, node string, distance map[string]int) int {
	if val, ok := distance[node]; ok {
		return val
	}

	maxNeighbor := 0
	for _, neighbor := range g[node] {
		dist := traverseDistance(g, neighbor, distance)
		if dist > maxNeighbor {
			maxNeighbor = dist
		}
	}

	distance[node] = 1 + maxNeighbor
	return distance[node]
}
