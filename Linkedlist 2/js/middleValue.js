const middleValue = (head) => {
    const values = [];
  
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    
    return values[Math.floor(values.length / 2)];
};

const middleValue = (head) => {
    let fast = head;
    let slow = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow.val;
};