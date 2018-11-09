const breadthFirstSearch = (input, start) => {
  const queue = [];
  const visited = [];

  queue.push(start);
  visited[start] = true;

  while (queue.length > 0) {
    const vertex = queue.shift();

    const { siblings } = input[vertex];

    for (let x = 0; x < siblings.length; x++) {
      if (visited[siblings[x]] === null || visited[siblings[x]] === false) {
        queue.push(siblings[x]);
        visited[siblings[x]] = true;
      }
    }
  }
};

export default breadthFirstSearch;
