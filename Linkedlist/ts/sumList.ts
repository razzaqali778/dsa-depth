export class ListNode {
  constructor(public val: number, public next: ListNode | null = null) {}
}

export function sumList(head: ListNode | null): number {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}

export function sumListRecursive(head: ListNode | null): number {
  if (head === null) {
    return 0;
  }
  return head.val + sumListRecursive(head.next);
}
