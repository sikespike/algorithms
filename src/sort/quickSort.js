function quickSwap(input, one, two) {
    const temp = input[one];

    input[one] = input[two];
    input[two] = temp;

    return input;
}

function getMedian(input, one, two, three) {
    const valOne = input[one];
    const valTwo = input[two];
    const valThree = input[three];

    if(valOne > valTwo) {
        if(valTwo > valThree){
            return three;
        } else {
            return two;
        }
    } else if(valTwo > valThree){
            if(valOne > valThree) {
                return one;
            } else {
                return three;
            }
        } else if(valThree > valOne) {
                return two;
            } else {
                return one;
            }
}
}

function partition(input, left, right) {
    const middle = Math.floor((right - left)/2) + left;
    const pivot = getMedian(input, left, middle, right);

    const pivotValue = input[pivot];

    quickSwap(input, pivot, right);

    let newLeft = left;
    for(let x=left;x<right-1;x++) {
        if(input[x] <= pivotValue) {
            quickSwap(input, x, newLeft);
            newLeft++;
        }
    }

    quickSwap(input, newLeft, right);
    return newLeft;
}

const recursiveQuickSort(input, left, right) {
    if(left < right) {
        const sortIndex = partition(input, left, right);
        recursiveQuickSort(input, left, sortIndex - 1);
        recursiveQuickSort(input, sortIndex + 1, right);
    }
}

const quickSort = (input) => {
    recursiveQuickSort(input, 0, input.length - 1);

    return input;
};