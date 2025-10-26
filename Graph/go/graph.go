package graph

// Graph represents an adjacency list keyed by string node ids.
type Graph map[string][]string

const (
	maxInt = int(^uint(0) >> 1)
	minInt = -maxInt - 1
)

// BuildUndirectedGraph converts an edge list into an adjacency list.
func BuildUndirectedGraph(edges [][2]string) Graph {
	g := make(Graph, len(edges)*2)
	for _, edge := range edges {
		a, b := edge[0], edge[1]
		g[a] = append(g[a], b)
		g[b] = append(g[b], a)
	}
	return g
}
