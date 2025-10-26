import { Graph } from "./types";

export function breadthFirstTraversal(graph: Graph, source: string): string[] {
  if (!source) return [];

  const order: string[] = [];
  const queue: string[] = [source];
  const visited = new Set<string>([source]);

  while (queue.length > 0) {
    const current = queue.shift()!;
    order.push(current);

    for (const neighbor of graph[current] ?? []) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }

  return order;
}
