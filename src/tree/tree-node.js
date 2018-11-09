const NodeConstants = {
    DEFAULT_CHILD: 2
};

export { NodeConstants };

export default class TreeNode {
    constructor(value, nodeLimit) {
        this.value = value || null;
        this.parent = null;
        this.nodeLimit = nodeLimit && nodeLimit > 0 ? nodeLimit : NodeConstants.DEFAULT_CHILD ;
        this.nodes = [];
    }

    setNode(node) {
        this.value = node.value;
        this.parent = node.parent;
        this.nodeLimit = node.nodeLimit;
    }

    insert(node) {
        if(this.nodes.length === 0 && this.parent === null) {
            if(!this.value) {
                this.setNode(node);
                return true;
            } else {
                return this.insertUnordered(node);
            }
        }

        return this.insertUnordered(node);
    }

    insertUnordered(node) {
        if(this.nodes.length < this.nodeLimit) {
            this.nodes.push(node);
            return true;
        } else {
            for(let x=0;x<this.nodes.length; x++) {
                this.nodes[x].insert(node);
            }
        }
    }
    
    remove(node) {
        this.nodes.forEach((n, index) => {
            if(n.value === node) {
                n.nodes[0].parent = n.parent;
                n.parent.nodes.splice(index, 1);

                return n;
            } else {
                for(let x=0;x<this.nodes.length; x++) {
                    const didRemove = this.nodes[x].remove(node);

                    if(!didRemove) {
                        return didRemove;
                    }
                }
            }
        });

        return false;
    }
}