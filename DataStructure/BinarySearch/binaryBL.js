class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {  //it will insert the data into the BinaryTree.

        let newnode = new Node(data);
        if (this.root === null) {
            console.log("root is null");
            this.root = newnode;
        } else {
            this.insertNewNode(this.root, newnode);
        }
    }


    insertNewNode(node, newNode) {
        //it will insert the data into the BinaryTree at corresponding position.
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNewNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNewNode(node.right, newNode);
            }
        }
    }

    getRootNode() {
        return this.root;  //it will return root node.

    }

    inorder(node) {
        if (node !== null) {
            //it will print nodes data in left,root,right.
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }


    preorder(node) {
        if (node !== null) {
            //it will print nodes data in root,left,right.
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
}
module.exports = {
    Node, binarySearchTree
}