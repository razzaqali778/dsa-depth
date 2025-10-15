class Node{
    constructor(val, next= null){
        this.val = val
        this.next = next
    }
}

function linkedListFind(head, target){
    let curr = head

    while(curr !== null){
        if(curr.val === target) return true
        curr = curr.next
    }
    return false
}

function linkedListFind(head, target){
    if(head === null) return false

    if(head.next === target) return true

    return linkedListFind(head.next, target)
}