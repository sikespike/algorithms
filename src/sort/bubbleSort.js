function bubbleSwap(input, one, two) {
    const temp = input[one];

    input[one] = input[two];
    input[two] = temp;

    return input;
}

function bubbleIteration(input, index) {
    const item = input[index];
    let firstIndex = -1;
    for(let x=index+1;x<input.length;x++) {
        if(item > input[x]) {
            if(firstIndex === -1) {
                firstIndex = x - 1;
            }

            input = bubbleSwap(input, index, x);
            index = x;
        }
    }

    return {first:firstIndex, input};
}

// 1,1,8,4,9,2,3,6,2
// pass 3
// 1,1,4,9,2,3,6,2,8
// 1,1,
function bubbleSort(input) {
    for(let x=0;x<input.length;x++) {
        const pass = bubbleIteration(input, x);

        if(pass.first !== -1) {
            x = pass.first - 1;
            input = pass.input;
        }
    }

    return input;
}