import { Graph } from "./types";

export function longestPath(graph: Graph): number {
  const distance: Record<string, number> = {};
  for (const [node, neighbors] of Object.entries(graph)) {
    if (neighbors.length === 0) {
      distance[node] = 0;
    }
  }

  let maxDistance = 0;
  for (const node of Object.keys(graph)) {
    const value = traverse(graph, node, distance);
    if (value > maxDistance) maxDistance = value;
  }

  return maxDistance;
}

function traverse(graph: Graph, node: string, distance: Record<string, number>): number {
  if (distance[node] !== undefined) return distance[node];

  let best = 0;
  for (const neighbor of graph[node] ?? []) {
    const attempt = traverse(graph, neighbor, distance);
    if (attempt > best) best = attempt;
  }

  distance[node] = best + 1;
  return distance[node];
}
