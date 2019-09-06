var BST = require("./BST");
var tree = new BST();
tree.addNode(10);
tree.addNode(20);
tree.addNode(9);
tree.addNode(30);
tree.addNode(15);
tree.addNode(35);
tree.addNode(28);
//tre


//console.log(JSON.stringify(tree));

tree.sum_child();
console.log();