class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data; 
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    min() {
        var node = this.root;
        while(node.left) {
            node = node.left;
        }
        if(node) {
            console.log(node.data);
        }
        
    }

    sum_child(node=this.root) {
        if(!node) {
            return 0;
        }

        if(!node.right && !node.left) {
            return node.data;
        }

        if(node.left && !node.right) {
            node.data = node.data + this.sum_child(node.left);
            return node.data;
        }

        if(node.right && !node.left) {
            node.data = node.data + this.sum_child(node.right);
            return node.data;
        }

        if(node.left && node.right) {
            node.data = node.data + this.sum_child(node.right) + this.sum_child(node.left);
            return node.data;
        }

        
    }
    max() {
        var node = this.root;
        while(node.right) {
            node = node.right
        }
        console.log(node.data);
    }
    addNode(data) {
        let node = new Node(data);

        if(this.root === null) {
            this.root = node;
            return;
        }

        function search(item) {
            if(node.data > item.data && item.right) {
                return search(item.right);
            }

            if(node.data < item.data && item.left) {
                return search(item.left);
            }

            if(node.data > item.data && item.right === null) {
                item.right = node;
                return;
            }

            if(node.data < item.data && item.left === null ) {
                item.left = node;
                return;
            }

        }

        return search(this.root);

    }

    inorder(node = this.root) {
        if(!node) return;
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }

    height(node) {
        if(!node) {
            return 0;
        }

        var leftHeight = this.height(node.left);
        var rightHeight = this.height(node.right);
        
        return Math.max(1 + leftHeight, 1 +rightHeight);
    }

    remove(data) {
        
        const removeNode = function(node, data) {

            if(!node) {
                return;
            }

            if(node.data == data) {
                // we got a match
                //case 1 : No child

                if(!node.left && !node.right) {
                    return null;
                }

                //Case 2
                if(!node.right) {
                    return node.left;
                }
                //Case 2
                if(!node.left) {
                    return node.right;
                }

                //Case 3:
                if(node.right && node.left) {
                    // First get the right node. 
                    let tempNode = node.right;
                    while(tempNode.left) {
                        tempNode = tempNode.left;
                    }

                    // Now tempNode the least node in the right subtree;
                    node.data = tempNode.data;
                    node.right = removeNode(node.right, node.data);
                    return node;
                }


            }


            if(data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            } else if(data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            
        }

        this.root = removeNode(this.root, data);
        
    }



}

module.exports = BST;
var bst = new BST();

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
bst.remove(15)

//bst.traverse(bst.root);
// bst.inorder(bst.root);

//console.log(JSON.stringify(bst));