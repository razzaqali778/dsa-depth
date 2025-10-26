export type Graph = Record<string, string[]>;

export function buildUndirectedGraph(edges: Array<[string, string]>): Graph {
  const graph: Graph = {};
  for (const [a, b] of edges) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}
