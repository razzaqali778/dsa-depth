class Node{
    constructor(val, next= null){
        this.val = val
        this.next = next
    }
}


function getNodeValue(head, index){
    let curr = head
    let count = 0

    while(curr !== null){
        if(index === count) return curr.val
        count ++
        curr = curr.next
    }
    return null
}

const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};
