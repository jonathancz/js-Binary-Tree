var tree;

function setup() {
    noCanvas();
	// New Tree
    tree = new Tree();
	// Add 25 random values
    for(var i = 0; i < 25; i++) {
        tree.addValue(floor(random(0,100)));
    }
	// Traverse the Tree
	tree.traverse();
	// Print out tree
    console.log(tree);

	var result = tree.search(10);
	if (result == null) {
		console.log("Not found");
	}
	else {
		console.log(result);
	}
}