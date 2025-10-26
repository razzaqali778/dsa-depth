import { Graph } from "./types";

export function largestComponent(graph: Graph): number {
  const visited = new Set<string>();
  let largest = 0;

  for (const node of Object.keys(graph)) {
    const size = exploreSize(graph, node, visited);
    largest = Math.max(largest, size);
  }

  return largest;
}

function exploreSize(graph: Graph, node: string, visited: Set<string>): number {
  if (visited.has(node)) return 0;
  visited.add(node);

  let size = 1;
  for (const neighbor of graph[node] ?? []) {
    size += exploreSize(graph, neighbor, visited);
  }
  return size;
}
