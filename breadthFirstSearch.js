function makeGraphNode() {
    var node = {
        value: null,
        siblings: []
    };
}

function breadthFirstSearch(input, start) {
    var queue = [];
    var visited = [];

    queue.push(start);
    visited[start] = true;

    while(queue.length > 0) {
        var vertex = queue.shift();

        var siblings = input[vertex].siblings;
        for(var x=0;x< siblings.length;x++) {
            if(visited[siblings[x]] == null || visited[siblings[x]] == false) {
                queue.push(siblings[x]);
                visited[siblings[x]];
            }
        }
    }
}