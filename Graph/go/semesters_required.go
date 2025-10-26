package graph

// SemestersRequired returns the fewest semesters needed to finish all courses.
func SemestersRequired(numCourses int, prereqs [][2]int) int {
	graph := make(map[int][]int, numCourses)
	for i := 0; i < numCourses; i++ {
		graph[i] = []int{}
	}
	for _, edge := range prereqs {
		a, b := edge[0], edge[1]
		graph[a] = append(graph[a], b)
	}

	distance := map[int]int{}
	for node := 0; node < numCourses; node++ {
		if len(graph[node]) == 0 {
			distance[node] = 1
		}
	}

	maxSemesters := 0
	for node := 0; node < numCourses; node++ {
		value := traverseSemesters(graph, node, distance)
		if value > maxSemesters {
			maxSemesters = value
		}
	}
	return maxSemesters
}

func traverseSemesters(graph map[int][]int, node int, distance map[int]int) int {
	if val, ok := distance[node]; ok {
		return val
	}

	maxDistance := 0
	for _, neighbor := range graph[node] {
		neighborDistance := traverseSemesters(graph, neighbor, distance)
		if neighborDistance > maxDistance {
			maxDistance = neighborDistance
		}
	}

	distance[node] = maxDistance + 1
	return distance[node]
}
