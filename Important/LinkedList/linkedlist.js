/**
 * Linked list patterns with classic interview routines.
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Floyd's Tortoise and Hare; returns start node of cycle or null.
function detectCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
}

function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reorderList(head) {
  if (!head || !head.next) return head;
  const mid = findMiddle(head);
  let second = reverseList(mid.next);
  mid.next = null;
  let first = head;
  while (second) {
    const tmp1 = first.next;
    const tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
  return head;
}

// Reverse nodes in groups of k.
function reverseKGroup(head, k) {
  const dummy = new ListNode(0, head);
  let groupPrev = dummy;
  while (true) {
    let kth = groupPrev;
    for (let i = 0; i < k && kth; i++) kth = kth.next;
    if (!kth) break;
    const groupNext = kth.next;
    let prev = groupNext;
    let curr = groupPrev.next;
    while (curr !== groupNext) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    const tmp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = tmp;
  }
  return dummy.next;
}

// Merge K sorted lists using min-heap.
class MinHeap {
  constructor() {
    this.data = [];
  }
  push(node) {
    if (!node) return;
    this.data.push(node);
    this._bubbleUp(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const end = this.data.pop();
    if (this.data.length) {
      this.data[0] = end;
      this._sink(0);
    }
    return top;
  }
  isEmpty() {
    return this.data.length === 0;
  }
  _bubbleUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p].val <= this.data[i].val) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }
  _sink(i) {
    const n = this.data.length;
    while (true) {
      let smallest = i;
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      if (l < n && this.data[l].val < this.data[smallest].val) smallest = l;
      if (r < n && this.data[r].val < this.data[smallest].val) smallest = r;
      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }
}

function mergeKLists(lists) {
  const heap = new MinHeap();
  lists.forEach((node) => heap.push(node));
  const dummy = new ListNode(0);
  let tail = dummy;
  while (!heap.isEmpty()) {
    const node = heap.pop();
    tail.next = node;
    tail = tail.next;
    if (node.next) heap.push(node.next);
  }
  return dummy.next;
}

module.exports = {
  ListNode,
  reverseList,
  detectCycle,
  findMiddle,
  reorderList,
  reverseKGroup,
  mergeKLists,
};

/*
Examples:
const n1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
reverseList(n1); // 4->3->2->1
*/
