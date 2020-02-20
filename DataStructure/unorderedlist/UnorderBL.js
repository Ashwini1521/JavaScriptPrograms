
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
        this.size = 0
    }
    add(element) {

        let new_node = new Node(element);
        if (this.head == null) {
            this.head = new_node;
        }
        else {
            // Else traverse till the last node 
            // and insert the new_node there 
            //inserting at the last 
            var last = this.head;
            while (last.next != null) {
                last = last.next;
            }

            // Insert the new_node at last node 
            last.next = new_node;
            // Return the list by head 
            //return last.next;
        }
    }

    // addorder(element) {
    //     var node = new_node(element);
    //     var current = this.head;
    //     if ((this.head == null) || (this.head.element >= node.element)) {
    //         node.next = this.head;
    //         this.head = node;
    //     }
    //     else {
    //         var current = this.head;
    //         var prev = null;
    //         while (current != null) {
    //             if (current.element > element) {
    //                 break;
    //             }
    //             else if (current.element < element) {
    //                 prev = current;
    //                 current = current.next;
    //             }
    //         }

    //         node.next = current;
    //         prev.next = node;
    //     }
    //     this.size++;
    // }

    deletedata(element) {
        var current = this.head;
        var prev = null;
        while (current != null) {
            if (current.element == element) {
                console.log("deleted element matched");
                if (prev == null) {
                    this.head = current.next;
                }
                else {
                    prev.next = current.next;
                }

                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next
        }
        return -1;
    }
    search(element) {
        let position = 0;
        if (this.head == null) {
            console.log("nothing found");
            return;
        }
        var current = this.head;
        while (current.next != null) {
            if (current.element == element) {
                this.deletedata(element);
                return;
            }
            current = current.next;
            position++;
        }
        return this.add(element);
    }
    printlist() {
        var current = this.head;
        var s = "";
        if (this.head != null) {
            while (current != null) {
                s = s + current.element + " ";
                current = current.next;
            }
            return s;
        }
    }
}


module.exports = {
    linkedlist, Node,
    myfile: () => {
        const fs = require('fs');
        var file = fs.readFileSync("Unordered.txt", 'utf-8');
        var a = file.split(" ");
        b = a.sort();
        return b;
    },
    revertfile: (res_file) => {
        const fs = require('fs');
        fs.writeFileSync('Unordered.txt', res_file, { encoding: 'utf-8', flag: 'w' });

    }
}
