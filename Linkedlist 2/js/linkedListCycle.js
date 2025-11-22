const linkedListCycle = (head) =>{
    const node = new Set()

    let curr = head
    while(curr !== null){
        if(node.has(curr)) return true
        node.add(curr)
        curr = curr.next
    }
    return false
}

const linkedListCycle =(head)=>{
    let slow = head
    let fast = head
    let firstIteration = true

    while(fast !== null && fast.next !== null){
        if(slow === fast && !firstIteration) return true

        slow = slow.next
        fast = fast.next.next
        firstIteration = false
    }
    return false
}