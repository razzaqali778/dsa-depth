import { buildUndirectedGraph } from "./types";

export function undirectedPath(edges: Array<[string, string]>, src: string, dst: string): boolean {
  const graph = buildUndirectedGraph(edges);
  return dfs(graph, src, dst, new Set<string>());
}

function dfs(graph: Record<string, string[]>, node: string, dst: string, visited: Set<string>): boolean {
  if (node === dst) return true;
  if (visited.has(node)) return false;
  visited.add(node);

  for (const neighbor of graph[node] ?? []) {
    if (dfs(graph, neighbor, dst, visited)) return true;
  }
  return false;
}
