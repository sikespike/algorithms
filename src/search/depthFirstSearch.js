const isDFSLeaf = (node) => node.left == null && node.right == null;

const depthFirstSearchIterative = (input, start) => {
  const stack = [];
  const visited = [];

  stack.push(start);

  while (stack.length > 0) {
    const vertex = stack.pop();

    if (visited[vertex] == false) {
      visited[vertex] = true;

      const { siblings } = input[vertex];

      for (let x = 0; x < siblings.length; x++) {
        stack.push(siblings[x]);
      }
    }
  }
};

const depthFirstSearchRecursive = (tree, item) => {
  if (tree === null) {
    return false;
  } else if (tree.value === item) {
    return true;
  } else if (isDFSLeaf(tree)) {
    return false;
  } else {
    const left = depthFirstSearchRecursive(tree.left, item);

    if (left === true) {
      return true;
    }

    const right = depthFirstSearchRecursive(tree.right, item);

    if (right === true) {
      return true;
    }

    return false;
  }
};

export default {
  depthFirstSearchIterative,
  depthFirstSearchRecursive,
};
