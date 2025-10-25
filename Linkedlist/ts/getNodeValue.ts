export class ListNode<T> {
  constructor(public val: T, public next: ListNode<T> | null = null) {}
}

export function getNodeValue<T>(head: ListNode<T> | null, index: number): T | null {
  if (head === null) {
    return null;
  }
  if (index === 0) {
    return head.val;
  }
  return getNodeValue(head.next, index - 1);
}
