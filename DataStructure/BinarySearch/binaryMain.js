const BstLib = require('./binaryBL');
try {
    let main = () => {
        let BST = new BstLib.binarySearchTree();
        BST.insert(2);
        BST.insert(5);
        BST.insert(3);
        BST.insert(1);
        BST.insert(9);
        let rootNode = BST.getRootNode();
        // console.log(root);
        console.log('inorder');
        BST.inorder(rootNode);
        console.log('Preorder');
        BST.preorder(rootNode);
    }
    main();
} catch (err) {
    throw err;
}