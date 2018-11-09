function solution(input) {
    const outOfOrder = [];

    for(var x=0;x<input.length-1; x++) {
        const first = input[x];
        const second = input[x+1];

        if(first > second) {
            outOfOrder[first] = true;
        } else if(outOfOrder.length > 0) {
            if(outOfOrder.length -1 > second){
                outOfOrder[second] = true;
            }
        }
    }

    let result = 0;
    for(var x=0;x<outOfOrder.length;x++) {
        if(outOfOrder[x] != null) {
            result++;
        }
    }
    return result < 2;
}


function populateList(list,node, depth){
    list[2*depth] = node[0];

    if(node[1]!= null) {
        list[2*depth +1] = node[1][0];
        list = populateList(list, node[1], depth +1);
    } else {
        list[2*depth +1] = null;
    }



    if(node[2] != null){
        list[2*depth +2] = node[2][0];
        list = populateList(list, node[1], depth +1);
    } else {
        list[2*depth +2] = null;
    }


    return list;
}

function buildTreeFail(input) {
    let list = [];

    list = populateList(list, input, 0);

    return list;
}


function buildTree(input) {
    const node = {};

    if(input == null || input.length == 0){
        return null;
    }

    node.x = input[0];
    node.l = buildTree(input[1]);
    node.r = buildTree(input[2]);

    return node;
}

function isLeaf(node) {
    return node.l == null && node.r == null;
}

function amp(node, depth) {
    if(node == null) {
        return null;
    } else if(isLeaf(node)) {
        return {max: -1, min:node.x};
    }

    const val = node.x;

    const left = amp(node.l, depth+1);
    const right = amp(node.r, depth+1);

    let leftMax = -1;
    let leftMin = null;
    let rightMax = -1;
    let rightMin = null;

    if(left != null){
        leftMin = left.min;
        leftMax = left.max;
    }

    if(right != null){
        rightMin = right.min;
        rightMax = right.max;
    } else {
        rightMin = left != null ? left.min : 0;
    }

    let max = null;
    let min = null;

    if(depth != 0){
        max = Math.max(val, Math.max(leftMax, rightMax));
        min = Math.min(val, Math.min(leftMin, rightMin));
    } else if(leftMax - leftMin > rightMax - rightMin){
            if(val - leftMin > leftMax){
                max = val;
                min = leftMin;
            } else {
                max = leftMax;
                min = leftMin;
            }
        } else if(val - rightMin > rightMax) {
                max = val;
                min = rightMin;
            } else {
                max = rightMax;
                min = rightMin;
            }
    return {max,min};
}

function amp2(list) {
    let minNode = -1;
    const amp = -1;
    let minIndex = -1;

    let maxNode = -1;
    let maxIndex = -1;

    for(let x=0;x<list.length;x++) {
        if(list[x] != null) {
            if(minNode == -1 || minNode > list[x]) {
                minNode = list[x];
                minIndex = x;
            }

            if(maxNode < list[x]){
                maxNode = list[x];
                maxIndex = x;
            }
        }
    }

    const diff = maxNode - minNode;
}

function solution5(input) {
    const tree = buildTree(input);
    const result = amp(tree,0);

    return result.max - result.min;
}

function solution4(input) {
    for(let x=input.length -1; x >=0;x--){
        for(let y=input[x].length -1; y>=0;y--){
            const point = input[x][y];

            let total1 = 0;
            let total2 = 0;

            if(x+1 <= input.length -1){
                total1 = point+input[x+1][y];
            }

            if(y+1 <= input[0].length-1){
                total2 = point+input[x][y+1]
            }

            input[x][y] = Math.max(point, Math.max(total1,total2));
        }
    }

    return input[0][0];
}


function solution3(N) {
    const number = Math.pow(11, N);

    const numString = number.toString();

    let result = 0;

    for(let x=0;x<numString.length;x++) {
        if(numString[x] == "1"){
            result++;
        }
    }

    return result;
}


function solution2(input) {
    const tempResult = [];

    for(var x=0;x<input.length;x++) {
        var key = input[x];
        if(tempResult[key] == null){
            tempResult[key] = [];
            tempResult[key].push(x);
        } else if(tempResult[key] !== null) {
            tempResult[key].push(x);
        }
    }

    let result = 0;
    let inputLength = input.length;

    for(var x=0; x < inputLength; x++) {
        var key = input[x];

        if(tempResult[key] != null) {
            const subset = tempResult[key];

            if(subset.length > 1){
                for(let i=0; i < subset.length;i++){
                    for(let j= i+1;j<subset.length;j++){
                        const index = Math.abs(subset[i] - subset[i+1]);
                        const newKey = input[index];

                        result = Math.max(result,newKey);
                    }
                }
            } else {
                result = Math.max(result, key);
            }


            tempResult.splice(key, 1);

            input.splice(x,1);

            x--;
            inputLength--;
        }
    }

    return result;
}


function solution1(S) {
    if(S !== null && S.trim().length > 0){
        const result = [];
        let tempResult = "";
        for(var x= S.length -1;x >= 0;x--){
            if(S[x] == " "){
                result.push(tempResult);
                tempResult = "";
            } else if(x == 0){
                tempResult += S[x];
                result.push(tempResult);
            }
            else {
                tempResult += S[x];
            }
        }

        let resultString = "";

        for(var x= result.length-1;x>=0;x--){
            resultString += `${result[x] } `;
        }

        return resultString.trim();
    }

    return null;
}

function test2() {
    const result = solution( [1, 3, 5, 3, 4] );

    $("body").html(result);
}

function test1() {
    const result = solution([[2,2,4,2],[0,3,0,1],[1,2,2,1],[4,1,2,2]]);

    $("body").html(result);
}