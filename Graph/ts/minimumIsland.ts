import { Grid, inBounds, posKey } from "./grid";

export function minimumIsland(grid: Grid): number {
  const visited = new Set<string>();
  let minSize = Infinity;

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = measure(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }

  return minSize === Infinity ? 0 : minSize;
}

function measure(grid: Grid, r: number, c: number, visited: Set<string>): number {
  if (!inBounds(grid, r, c)) return 0;
  if (grid[r][c] === "W") return 0;

  const key = posKey(r, c);
  if (visited.has(key)) return 0;
  visited.add(key);

  let size = 1;
  size += measure(grid, r - 1, c, visited);
  size += measure(grid, r + 1, c, visited);
  size += measure(grid, r, c - 1, visited);
  size += measure(grid, r, c + 1, visited);

  return size;
}
