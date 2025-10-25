export class ListNode<T> {
  constructor(public val: T, public next: ListNode<T> | null = null) {}
}

export function linkedListFind<T>(head: ListNode<T> | null, target: T): boolean {
  if (head === null) {
    return false;
  }
  if (head.val === target) {
    return true;
  }
  return linkedListFind(head.next, target);
}
