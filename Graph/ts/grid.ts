export type Grid = string[][];

export function inBounds(grid: Grid, r: number, c: number): boolean {
  return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}

export function posKey(r: number, c: number): string {
  return `${r},${c}`;
}
