import { Graph } from "./types";

export function connectedComponentsCount(graph: Graph): number {
  const visited = new Set<string>();
  let count = 0;

  for (const node of Object.keys(graph)) {
    if (explore(graph, node, visited)) {
      count += 1;
    }
  }

  return count;
}

function explore(graph: Graph, node: string, visited: Set<string>): boolean {
  if (visited.has(node)) return false;
  visited.add(node);

  for (const neighbor of graph[node] ?? []) {
    explore(graph, neighbor, visited);
  }
  return true;
}
