import Tree from './tree';
import { NodeConstants } from './tree-node';

function makeBinaryTreeNode(value) {
    const val = value || null;

    const node = {
        parent: null,
        left: null,
        right: null,
        value: val
    };

    return node;
}

function binaryTreeInsert(tree, item) {
    if(tree.value == null) {
        tree.value = item;
    } else if(tree.value > item) {
            if(tree.left == null) {
                const node = makeBinaryTreeNode(item);
                tree.left = node;
                node.parent = tree;
            } else {
                tree = binaryTreeInsert(tree.left, item);
            }
        } else if(tree.value < item) {
            if(tree.right == null) {
                const node = makeBinaryTreeNode(item);
                tree.right = node;
                node.parent = tree;
            } else {
                tree = binaryTreeInsert(tree.right, item);
            }
        }

    return tree;
}

export default class BinaryTree extends Tree {
    constructor(nodes) {
        super(NodeConstants.DEFAULT_CHILD, nodes);
    }

    buildTree(input) {
        if(input == null) {
            return null;
        } else {
            const tree = makeBinaryTreeNode(input[0]);
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
}