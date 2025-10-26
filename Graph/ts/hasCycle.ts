import { Graph } from "./types";

export function hasCycle(graph: Graph): boolean {
  const visiting = new Set<string>();
  const visited = new Set<string>();

  for (const node of Object.keys(graph)) {
    if (detect(graph, node, visiting, visited)) {
      return true;
    }
  }
  return false;
}

function detect(graph: Graph, node: string, visiting: Set<string>, visited: Set<string>): boolean {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);
  for (const neighbor of graph[node] ?? []) {
    if (detect(graph, neighbor, visiting, visited)) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);
  return false;
}
