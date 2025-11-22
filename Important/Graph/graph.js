/**
 * Core graph algorithms using adjacency lists.
 */

class MinHeap {
  constructor(compare = (a, b) => a[0] - b[0]) {
    this.data = [];
    this.compare = compare;
  }
  push(item) {
    this.data.push(item);
    this._bubbleUp(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const end = this.data.pop();
    if (this.data.length) {
      this.data[0] = end;
      this._sink(0);
    }
    return top;
  }
  isEmpty() {
    return this.data.length === 0;
  }
  _bubbleUp(idx) {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.compare(this.data[idx], this.data[parent]) >= 0) break;
      [this.data[idx], this.data[parent]] = [this.data[parent], this.data[idx]];
      idx = parent;
    }
  }
  _sink(idx) {
    const n = this.data.length;
    while (true) {
      let smallest = idx;
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;
      if (left < n && this.compare(this.data[left], this.data[smallest]) < 0) smallest = left;
      if (right < n && this.compare(this.data[right], this.data[smallest]) < 0) smallest = right;
      if (smallest === idx) break;
      [this.data[idx], this.data[smallest]] = [this.data[smallest], this.data[idx]];
      idx = smallest;
    }
  }
}

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(a, b) {
    const ra = this.find(a);
    const rb = this.find(b);
    if (ra === rb) return false;
    if (this.rank[ra] < this.rank[rb]) this.parent[ra] = rb;
    else if (this.rank[rb] < this.rank[ra]) this.parent[rb] = ra;
    else {
      this.parent[rb] = ra;
      this.rank[ra]++;
    }
    return true;
  }
}

// DFS traversal; good for components and cycle detection.
function dfs(graph, start) {
  const visited = new Set();
  const order = [];
  (function explore(node, parent) {
    visited.add(node);
    order.push(node);
    for (const neigh of graph[node] || []) {
      const next = typeof neigh === "object" ? neigh.to : neigh;
      if (!visited.has(next)) explore(next, node);
    }
  })(start, -1);
  return order;
}

// BFS traversal; finds shortest paths in unweighted graphs.
function bfs(graph, start) {
  const visited = new Set([start]);
  const order = [];
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const neigh of graph[node] || []) {
      const next = typeof neigh === "object" ? neigh.to : neigh;
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
  }
  return order;
}

// Dijkstra: shortest paths with non-negative weights.
function dijkstra(graph, source) {
  const dist = {};
  const pq = new MinHeap((a, b) => a[0] - b[0]);
  for (const node of Object.keys(graph)) dist[node] = Infinity;
  dist[source] = 0;
  pq.push([0, source]);
  while (!pq.isEmpty()) {
    const [d, node] = pq.pop();
    if (d !== dist[node]) continue;
    for (const { to, weight } of graph[node]) {
      const nd = d + weight;
      if (nd < dist[to]) {
        dist[to] = nd;
        pq.push([nd, to]);
      }
    }
  }
  return dist;
}

// Bellman-Ford: handles negative weights; detects cycles.
function bellmanFord(n, edges, source) {
  const dist = Array(n).fill(Infinity);
  dist[source] = 0;
  for (let i = 0; i < n - 1; i++) {
    let updated = false;
    for (const { u, v, w } of edges) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
      }
    }
    if (!updated) break;
  }
  for (const { u, v, w } of edges) {
    if (dist[u] + w < dist[v]) return { hasNegativeCycle: true, dist };
  }
  return { hasNegativeCycle: false, dist };
}

// Floyd-Warshall: all-pairs shortest paths; O(n^3).
function floydWarshall(matrix) {
  const dist = matrix.map((row) => row.slice());
  const n = dist.length;
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
}

// Prim: Minimum Spanning Tree for connected weighted graphs.
function primMST(graph, start = 0) {
  const visited = new Set();
  const pq = new MinHeap((a, b) => a.weight - b.weight);
  visited.add(String(start));
  for (const edge of graph[start]) pq.push(edge);
  const mst = [];
  while (!pq.isEmpty()) {
    const { to, weight, from } = pq.pop();
    if (visited.has(String(to))) continue;
    visited.add(String(to));
    mst.push({ from, to, weight });
    for (const edge of graph[to]) pq.push(edge);
  }
  return mst;
}

// Kruskal: MST using sorting + Union-Find.
function kruskalMST(n, edges) {
  const uf = new UnionFind(n);
  const result = [];
  edges.sort((a, b) => a.weight - b.weight);
  for (const { u, v, weight } of edges) {
    if (uf.union(u, v)) result.push({ u, v, weight });
  }
  return result;
}

// Kahn's algorithm for DAG topological order.
function topologicalSort(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  const indeg = Array(n).fill(0);
  for (const [u, v] of edges) {
    adj[u].push(v);
    indeg[v]++;
  }
  const q = [];
  indeg.forEach((d, i) => d === 0 && q.push(i));
  const order = [];
  while (q.length) {
    const node = q.shift();
    order.push(node);
    for (const nei of adj[node]) {
      if (--indeg[nei] === 0) q.push(nei);
    }
  }
  return order.length === n ? order : []; // empty => cycle
}

module.exports = {
  dfs,
  bfs,
  dijkstra,
  bellmanFord,
  floydWarshall,
  primMST,
  kruskalMST,
  topologicalSort,
  UnionFind,
};

/*
Quick examples:
const graph = {
  0: [{ to: 1, weight: 4, from: 0 }, { to: 7, weight: 8, from: 0 }],
  1: [{ to: 0, weight: 4, from: 1 }, { to: 2, weight: 8, from: 1 }],
  2: [{ to: 1, weight: 8, from: 2 }],
  7: [{ to: 0, weight: 8, from: 7 }],
};
dfs(graph, 0); // traversal order
primMST(graph, 0); // MST edges
*/
