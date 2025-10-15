export class Node {
    constructor(val, next=null){
        this.val = val
        this.next = next
    }
}

function sumList(head){
    const curr = head
    let sum = 0

    while(curr !== null){
        sum += curr.val
        curr = curr.next
    }

    return sum
}

function sumListRecrussion(head){
    if(head === null) return 0

    return head.val + sumList(head.next)
}