import { Grid, inBounds, posKey } from "./grid";

export function bestBridge(grid: Grid): number {
  const firstIsland = new Set<string>();
  outer: for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (grid[r][c] === "L") {
        collectIsland(grid, r, c, firstIsland);
        if (firstIsland.size) {
          break outer;
        }
      }
    }
  }

  if (!firstIsland.size) return 0;

  const queue: Array<[number, number, number]> = [];
  const visited = new Set<string>(firstIsland);

  for (const key of firstIsland) {
    const [row, col] = key.split(",").map(Number);
    queue.push([row, col, 0]);
  }

  const deltas = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    const [row, col, dist] = queue.shift()!;
    const key = posKey(row, col);
    if (grid[row][col] === "L" && !firstIsland.has(key)) {
      return dist - 1;
    }

    for (const [dr, dc] of deltas) {
      const nr = row + dr;
      const nc = col + dc;
      const neighborKey = posKey(nr, nc);
      if (!inBounds(grid, nr, nc) || visited.has(neighborKey)) continue;
      visited.add(neighborKey);
      queue.push([nr, nc, dist + 1]);
    }
  }

  return -1;
}

function collectIsland(grid: Grid, r: number, c: number, island: Set<string>): void {
  if (!inBounds(grid, r, c)) return;
  if (grid[r][c] === "W") return;

  const key = posKey(r, c);
  if (island.has(key)) return;
  island.add(key);

  collectIsland(grid, r - 1, c, island);
  collectIsland(grid, r + 1, c, island);
  collectIsland(grid, r, c - 1, island);
  collectIsland(grid, r, c + 1, island);
}
