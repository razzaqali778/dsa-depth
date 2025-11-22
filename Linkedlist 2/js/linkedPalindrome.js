class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

const linkedPalindrome =(head)=>{
    const values = []
    let curr = head

    while(curr !==null){
        values.push(curr.val)
        curr = curr.next
    }

    return values.join(',') === values.reverse().join(',')
}
