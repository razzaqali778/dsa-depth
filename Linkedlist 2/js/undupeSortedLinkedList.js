const undupeSortedLinkedList =(head)=>{
    const dummyHead = new Node(null)
    let tail = dummyHead

    let curr = head

    while(curr !== null){
        if(curr.val !== tail.val){
            tail.next = new Node(curr.val)
            tail = tail.next
        }
        curr = curr.next
    }

    return dummyHead.next
}