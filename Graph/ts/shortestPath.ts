import { buildUndirectedGraph } from "./types";

export function shortestPath(edges: Array<[string, string]>, nodeA: string, nodeB: string): number {
  const graph = buildUndirectedGraph(edges);
  const queue: Array<[string, number]> = [[nodeA, 0]];
  const visited = new Set<string>([nodeA]);

  while (queue.length > 0) {
    const [node, distance] = queue.shift()!;
    if (node === nodeB) return distance;

    for (const neighbor of graph[node] ?? []) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      queue.push([neighbor, distance + 1]);
    }
  }

  return -1;
}
