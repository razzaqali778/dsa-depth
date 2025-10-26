export function semestersRequired(numCourses: number, prereqs: Array<[number, number]>): number {
  const graph: Record<number, number[]> = {};
  for (let i = 0; i < numCourses; i += 1) graph[i] = [];
  for (const [a, b] of prereqs) {
    graph[a].push(b);
  }

  const distance: Record<number, number> = {};
  for (let i = 0; i < numCourses; i += 1) {
    if (graph[i].length === 0) distance[i] = 1;
  }

  let maxSemester = 0;
  for (let i = 0; i < numCourses; i += 1) {
    const value = traverse(graph, i, distance);
    if (value > maxSemester) maxSemester = value;
  }

  return maxSemester;
}

function traverse(graph: Record<number, number[]>, node: number, distance: Record<number, number>): number {
  if (distance[node] !== undefined) return distance[node];

  let longest = 0;
  for (const neighbor of graph[node]) {
    const candidate = traverse(graph, neighbor, distance);
    if (candidate > longest) longest = candidate;
  }

  distance[node] = longest + 1;
  return distance[node];
}
