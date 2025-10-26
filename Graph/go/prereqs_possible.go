package graph

// PrereqsPossible returns whether all courses can be completed (i.e., no cycles).
func PrereqsPossible(numCourses int, prereqs [][2]int) bool {
	graph := make(map[int][]int, numCourses)
	for i := 0; i < numCourses; i++ {
		graph[i] = []int{}
	}
	for _, edge := range prereqs {
		a, b := edge[0], edge[1]
		graph[a] = append(graph[a], b)
	}

	visiting := map[int]struct{}{}
	visited := map[int]struct{}{}

	for node := 0; node < numCourses; node++ {
		if prereqCycle(graph, node, visiting, visited) {
			return false
		}
	}
	return true
}

func prereqCycle(graph map[int][]int, node int, visiting, visited map[int]struct{}) bool {
	if _, done := visited[node]; done {
		return false
	}
	if _, active := visiting[node]; active {
		return true
	}

	visiting[node] = struct{}{}
	for _, neighbor := range graph[node] {
		if prereqCycle(graph, neighbor, visiting, visited) {
			return true
		}
	}
	delete(visiting, node)
	visited[node] = struct{}{}
	return false
}
