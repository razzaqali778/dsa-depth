const longestPath = (graph) => {
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  for (let node in graph) {
    traverseDistance(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];

  let maxDistance = 0;
  for (let neighbor of graph[node]) {
    const attempt = traverseDistance(graph, neighbor, distance);
    if (attempt > maxDistance) maxDistance = attempt;
  }

  distance[node] = 1 + maxDistance;
  return distance[node];
};
