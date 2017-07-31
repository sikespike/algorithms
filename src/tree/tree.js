import TreeNode, { NodeConstants } from './tree-node';

export default class Tree {
    static find(root, target) {
        if(target instanceof TreeNode) {
            if(root.value === target.value) {
                return root;
            } else {
                for(let x=0;x<this.root.nodes.length; x++) {
                    const didRemove = Tree.find(root.nodes[x], target);

                    if(!didRemove) {
                        return didRemove;
                    }
                }
            }
        }
    }

    constructor(size, nodes) {
        this.nodeLimit = size && size > 0 ? size : NodeConstants.DEFAULT_CHILD;
        this.root = null;
        this.buildTree(nodes);
    }

    buildTree(nodes) {
        nodes.forEach((node) => {
            let nNode = new TreeNode(node, this.nodeLimit);
            if(!this.root) {
                this.root = nNode;
            } else {
                this.root.insert(nNode);
            }
        });
    }

    insert(node) {
        if(!(node instanceof TreeNode)) {
            node = new TreeNode(node, this.nodeLimit);
        }
        return this.root.insert(node);
    }

    remove(node) {
        if(node instanceof TreeNode) {
            node.parent.nodes.map((currentValue, index) => {
                if(node === currentValue) {
                    node.nodes[0].parent = node.parent;
                    node.parent.nodes.splice(index, 1);
                }
            });
        }

        return this.root.remove(node);
    }
}