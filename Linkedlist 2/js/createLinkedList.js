const createLinkedList=(arr)=>{
  const dummyHead = new Node()

  let tail = dummyHead

  for(let val of arr){
    tail.next = new Node(val)
    tail = tail.next
  }

  return dummyHead.next
}


const createLinkedList = (values, i = 0) => {
    if(i === values.length) return null

    const head = new Node(values[i])
    head.next = createLinkedList(values, i+1)
    return head
}











createLinkedList(["h", "e", "y"]);
// h -> e -> y