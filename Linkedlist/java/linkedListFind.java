class LinkedListFind {
  public static boolean linkedListFind(ListNode head, int target) {
    ListNode current = head;
    while (current != null) {
      if (current.val == target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  public static void run() {
    // intentionally empty
  }
}
