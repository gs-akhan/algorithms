var Tree = require("./BST");
var bst = new Tree();

bst.addNode(15); 
bst.addNode(25); 
bst.addNode(10); 
bst.addNode(7); 
bst.addNode(22); 
bst.addNode(17); 
bst.addNode(13); 
bst.addNode(5); 
bst.addNode(9); 
bst.addNode(27);
bst.addNode(15);

bst.addNode(40);
bst.addNode(50);
bst.addNode(60);
bst.addNode(70);
bst.addNode(80);
bst.addNode(90);
bst.addNode(100);
bst.addNode(110);

console.log(bst.height(bst.root));
//bst.inorder(bst.root);
