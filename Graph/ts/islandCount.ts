import { Grid, inBounds, posKey } from "./grid";

export function islandCount(grid: Grid): number {
  const visited = new Set<string>();
  let count = 0;

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited)) {
        count += 1;
      }
    }
  }

  return count;
}

function explore(grid: Grid, r: number, c: number, visited: Set<string>): boolean {
  if (!inBounds(grid, r, c)) return false;
  if (grid[r][c] === "W") return false;

  const key = posKey(r, c);
  if (visited.has(key)) return false;
  visited.add(key);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
}
