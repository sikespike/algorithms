function makeBinaryTreeNode(value) {
    var val = value ? value: null;

    var node = {
        parent: null,
        left: null,
        right: null
        value: val
    };

    return node;
}

function binaryTreeInsert(tree, item) {
    if(tree.value == null) {
        tree.value = item;
    } else {
        if(tree.value > item) {
            if(tree.left == null) {
                var node = makeBinaryTreeNode(item);
                tree.left = node;
                node.parent = tree;
            } else {
                tree = binaryTreeInsert(tree.left, item);
            }
        } else if(tree.value < item) {
            if(tree.right == null) {
                var node = makeBinaryTreeNode(item);
                tree.right = node;
                node.parent = tree;
            } else {
                tree = binaryTreeInsert(tree.right, item);
            }
        }
    }

    return tree;
}

function buildBinaryTree(input) {
    if(input == null) {
        return null;
    } else {
        var tree = makeBinaryTreeNode(input[0]);
        tree.left = buildBinaryTree(input[1]);
        if(tree.left != null) {
            tree.left.parent = tree;
        }

        tree.right = buildBinaryTree(input[2]);
        if(tree.right != null) {
            tree.right.parent = tree;
        }

        return tree;
    }
}