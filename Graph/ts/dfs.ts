import { Graph } from "./types";

export function depthFirstTraversal(graph: Graph, source: string): string[] {
  if (!source) return [];

  const order: string[] = [];
  const stack: string[] = [source];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const current = stack.pop()!;
    if (visited.has(current)) continue;
    visited.add(current);
    order.push(current);

    const neighbors = graph[current] ?? [];
    for (let i = neighbors.length - 1; i >= 0; i -= 1) {
      stack.push(neighbors[i]);
    }
  }

  return order;
}
