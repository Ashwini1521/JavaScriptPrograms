class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class Dequeue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addFirst(obj) {  //it will insert the value at the first in the dqueue.
        let node = new Node(obj);
        if (this.head == null) {
            this.head = node;
            return true;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        return true;
    }

    removeLast() {    //it will remove the value at the last in the dqueue.

        if (this.head == null) {
            console.log("list is empty");
            return " ";
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        let obj = temp.data;
        if (temp.prev != null)
            temp.prev.next = null;
        else
            this.head = null;
        return obj;
    }
}
module.exports = {
    Node, Dequeue
}