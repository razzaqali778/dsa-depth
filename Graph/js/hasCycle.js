const hasCycle = (graph) => {
  const visited = new Set();
  for (let startNode in graph) {
    if (cycleDetect(graph, startNode, new Set(), visited)) return true;
  }
  return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;

  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (cycleDetect(graph, neighbor, visiting, visited)) return true;
  }

  visiting.delete(node);
  visited.add(node);
  return false;
};
