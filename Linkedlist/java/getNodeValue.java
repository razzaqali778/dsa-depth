class GetNodeValue {
  public static Integer getNodeValue(ListNode head, int index) {
    ListNode current = head;
    int position = 0;
    while (current != null) {
      if (position == index) {
        return current.val;
      }
      position += 1;
      current = current.next;
    }
    return null;
  }

  public static void run() {
    // intentionally empty
  }
}
