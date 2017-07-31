function quickSwap(input, one, two) {
    var temp = input[one];

    input[one] = input[two];
    input[two] = temp;

    return input;
}

function getMedian(input, one, two, three) {
    var valOne = input[one];
    var valTwo = input[two];
    var valThree = input[three];

    if(valOne > valTwo) {
        if(valTwo > valThree){
            return three;
        } else {
            return two;
        }
    } else {
        if(valTwo > valThree){
            if(valOne > valThree) {
                return one;
            } else {
                return three;
            }
        } else {
            if(valThree > valOne) {
                return two;
            } else {
                return one;
            }
        }
    }
}

function partition(input, left, right) {
    var middle = Math.floor((right - left)/2) + left;
    var pivot = getMedian(input, left, middle, right);

    var pivotValue = input[pivot];

    quickSwap(input, pivot, right);

    var newLeft = left;
    for(var x=left;x<right-1;x++) {
        if(input[x] <= pivotValue) {
            quickSwap(input, x, newLeft);
            newLeft++;
        }
    }

    quickSwap(input, newLeft, right);
    return newLeft;
}

function recursiveQuickSort(input, left, right) {
    if(left < right) {
        var sortIndex = partition(input, left, right);
        recursiveQuickSort(input, left, sortIndex - 1);
        recursiveQuickSort(input, sortIndex + 1, right);
    }
}

//1,1,8,4,9,2,3,6,2
function quickSort(input) {
    recursiveQuickSort(input, 0, input.length - 1);

    return input;
}