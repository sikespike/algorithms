function binarySearchTreeInsert(tree, item) {
    if(tree.value == null) {
        tree.value = item;
    } else {
        if(tree.value > item) {
            if(tree.left == null) {
                var node = makeBinaryTreeNode(item);
                tree.left = node;
                node.parent = tree;
            } else {
                tree = binarySearchTreeInsert(tree.left, item);
            }
        } else if(tree.value < item) {
            if(tree.right == null) {
                var node = makeBinaryTreeNode(item);
                tree.right = node;
                node.parent = tree;
            } else {
                tree = binarySearchTreeInsert(tree.right, item);
            }
        }
    }

    return tree;
}

function buildBinarySearchTree(input) {
    var tree = makeBinaryTreeNode(null);

    for(var x=0;x<input.length;x++) {
        tree = binarySearchTreeInsert(tree, input[x]);
    }

    return tree;
}