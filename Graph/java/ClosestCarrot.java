import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Set;
import java.util.HashSet;

public class ClosestCarrot {
  public static int find(char[][] grid, int startRow, int startCol) {
    Queue<int[]> queue = new ArrayDeque<>();
    Set<String> visited = new HashSet<>();
    queue.add(new int[] {startRow, startCol, 0});
    visited.add(startRow + "," + startCol);

    while (!queue.isEmpty()) {
      int[] state = queue.poll();
      int row = state[0];
      int col = state[1];
      int distance = state[2];
      if (grid[row][col] == 'C') {
        return distance;
      }

      for (int[] delta : GraphUtils.DIRECTIONS) {
        int nr = row + delta[0];
        int nc = col + delta[1];
        String key = nr + "," + nc;
        if (!GraphUtils.inBounds(grid, nr, nc) || grid[nr][nc] == 'X' || visited.contains(key)) {
          continue;
        }
        visited.add(key);
        queue.add(new int[] {nr, nc, distance + 1});
      }
    }

    return -1;
  }
}
