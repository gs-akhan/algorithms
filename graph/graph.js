class Graph {
    constructor() {
        this.nodes = [];
        this.edges = {};
    }
    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }
    addEdge(node1, node2, weight = 1) {
        this.edges[node1].push({node : node2, weight});
        this.edges[node2].push({node: node1 , weight});
    }

    print() {
        this.nodes.forEach(node => {
            let item = "";
        
            item  = node + " => " + this.edges[node].map(n => n.node).join(", ");

            console.log(item);
        });
    }
}

var myGraph = new Graph();
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addEdge(1,2, 40);
myGraph.addEdge(1,3, 20);


//console.log(myGraph.edges);
myGraph.print();