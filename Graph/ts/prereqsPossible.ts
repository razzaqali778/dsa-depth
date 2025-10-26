export function prereqsPossible(numCourses: number, prereqs: Array<[number, number]>): boolean {
  const graph: Record<number, number[]> = {};
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }
  for (const [a, b] of prereqs) {
    graph[a].push(b);
  }

  const visiting = new Set<number>();
  const visited = new Set<number>();

  for (let node = 0; node < numCourses; node += 1) {
    if (hasCycle(graph, node, visiting, visited)) {
      return false;
    }
  }

  return true;
}

function hasCycle(graph: Record<number, number[]>, node: number, visiting: Set<number>, visited: Set<number>): boolean {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);
  for (const neighbor of graph[node]) {
    if (hasCycle(graph, neighbor, visiting, visited)) return true;
  }
  visiting.delete(node);
  visited.add(node);
  return false;
}
