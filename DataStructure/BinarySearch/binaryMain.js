/******************************************************************************
	 *  Execution       :   1. default node         cmd> node binaryMain.js
	 *                      2. if nodemon installed cmd> nodemon binaryMain.js
	 *
	 *  Purpose         : to print binarysearchtree. 
	 *
	 *  @description    :to print inorder and preorder of userinput using binarysearchtree ...
	 *
	 *  @file           : binaryMain.js
	 *  @overview       : binarysearchtree. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 21-02-2020
	 ******************************************************************************/
const read = require('readline-sync');
const callFunction = require('./binaryBL');
try {
    let main = () => {
        let BST = new callFunction.binarySearchTree();
        BST.insert(7);
        BST.insert(2);
        BST.insert(9);
        BST.insert(4);
        BST.insert(5);
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