//Node class
class Node {
    // constructor
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
// LinkedlList class
class LinkedList {


    add(data, head) {   //to add the data at the end of the chain in the slot
        try {
            let node = new Node(data);
            if (head == undefined || head.data > data) {
                node.next = head;
                head = node;
            }
            else {
                let current = head;
                let prev = current;

                while (current) {
                    if (current.data > data)
                        break;
                    prev = current;
                    current = current.next;
                }
                prev.next = node;
                node.next = current;
            }
            return head;
        }
        catch (err) {
            console.log(err);
        }
    }


    search(data, head) {   // search the list whether data is present in the list or not
        try {
            let current = head;
            while (current) {
                if (current.data === data) {
                    return true;
                }
                current = current.next;
            }
            return false;
        }
        catch (err) {
            console.log(err);
        }
    }


    remove(data, head) { //remove the data from the list
        try {
            if (head.data === data) {
                head = head.next;
                return head;
            }
            else {
                let current = head;
                let prev = head;
                while (current.data !== data) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
                current.next = null;
                return head;
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    getElement(head) {   // address of 1st block of the chain
        try {
            let newStr = "";
            let current = head;
            while (current) {
                newStr += current.data;
                if (current.next) {
                    newStr += " ";
                }
                current = current.next;
            }
            return newStr;
        }
        catch (err) {
            console.log(err);
        }
    }
}
//HashTable class
class HashTable {
    constructor() {
        this.slot = [];
        this.linkedlist = new LinkedList();
    }
    addElement(data) {
        try {
            let hashCode = data % 11;
            let ref = this.linkedlist.add(data, this.slot[hashCode]);
            this.slot[hashCode] = ref;
        }
        catch (err) {
            console.log(err);
        }
    }

    searchElement(data) {  // search the table whether data is present in the table or not
        try {
            let hashCode = data % 11;
            if (this.slot[hashCode] == undefined)
                return false;
            else
                return this.linkedlist.search(data, this.slot[hashCode]);
        }
        catch (err) {
            console.log(err);
        }
    }


    removeElement(data) { // to remove the data from the table
        try {
            let hashCode = data % 11;
            let ref = this.linkedlist.remove(data, this.slot[hashCode]);
            this.slot[hashCode] = ref;
        }
        catch (err) {
            console.log(err);
        }
    }


    getElements() {  // to print all the elements present in each slot
        try {
            let i = 0;
            while (i < this.slot.length) {
                console.log(this.linkedlist.getElement(this.slot[i]) || "-")
                i++;
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = {
    HashTable
}