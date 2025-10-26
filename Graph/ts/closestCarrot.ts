import { Grid, inBounds, posKey } from "./grid";

export function closestCarrot(grid: Grid, startRow: number, startCol: number): number {
  const queue: Array<[number, number, number]> = [[startRow, startCol, 0]];
  const visited = new Set<string>([posKey(startRow, startCol)]);
  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift()!;
    if (grid[row][col] === "C") return distance;

    for (const [dr, dc] of deltas) {
      const nr = row + dr;
      const nc = col + dc;
      const key = posKey(nr, nc);
      if (!inBounds(grid, nr, nc)) continue;
      if (grid[nr][nc] === "X" || visited.has(key)) continue;
      visited.add(key);
      queue.push([nr, nc, distance + 1]);
    }
  }

  return -1;
}
