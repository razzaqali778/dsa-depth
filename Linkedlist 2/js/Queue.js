class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(){
        if(this.size === 0){
            this.head = new Node(val)
            this.tail = this.head
        }else{
            this.tail.next = new Node(val)
            this.tail = this.tail.next

        }
    }
}