function isDFSLeaf(node) {
    return node.left == null && node.right == null;
}

function depthFirstSearchIterative(input, start) {
    var stack = [];
    var visited = [];

    stack.push(start);

    while(stack.length > 0) {
        var vertex = stack.pop();

        if(visited[vertex] == false) {
            visited[vertex] = true;

            var siblings = input[vertex].siblings;

            for(var x=0;x<siblings.length;x++) {
                stack.push(siblings[x]);
            }
        }
    }
}

function depthFirstSearchRecursive(tree, item) {
    if(tree == null) {
        return false;
    } else {
        if(tree.value == item) {
            return true;
        } else if(isDFSLeaf(tree)) {
            return false;
        } else {
            var left = depthFirstSearchRecursive(tree.left, item);

            if(left == true) {
                return true;
            }

            var right = depthFirstSearchRecursive(tree.right, item);

            if(right == true) {
                return true;
            }

            return false;
        }
    }
}