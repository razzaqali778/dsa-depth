class Node{
    constructor(val, next= null){
        this.val = val
        this.next = next
    }
}

function reverseList(head){
    let curr = head
    let prev = null

    while(curr !== null){
        const next = curr.next
        curr.next = prev
        curr = next
    }
    return prev
}

const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};