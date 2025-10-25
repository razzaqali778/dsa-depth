class SumList {
  public static int sumList(ListNode head) {
    int total = 0;
    ListNode current = head;
    while (current != null) {
      total += current.val;
      current = current.next;
    }
    return total;
  }

  public static int sumListRecursive(ListNode head) {
    if (head == null) {
      return 0;
    }
    return head.val + sumListRecursive(head.next);
  }

  public static void run() {
    // intentionally empty
  }
}
