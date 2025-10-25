export function allUnique<T>(items: T[]): boolean {
  return new Set(items).size === items.length;
}
