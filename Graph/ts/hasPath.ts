import { Graph } from "./types";

export function hasPath(graph: Graph, src: string, dst: string): boolean {
  if (src === dst) return true;
  const visited = new Set<string>();
  return dfs(graph, src, dst, visited);
}

function dfs(graph: Graph, node: string, dst: string, visited: Set<string>): boolean {
  if (node === dst) return true;
  if (visited.has(node)) return false;
  visited.add(node);

  for (const neighbor of graph[node] ?? []) {
    if (dfs(graph, neighbor, dst, visited)) {
      return true;
    }
  }
  return false;
}
