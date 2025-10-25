class ReverseList {
  public static ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;

    while (current != null) {
      ListNode next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  public static void run() {
    // intentionally empty
  }
}
