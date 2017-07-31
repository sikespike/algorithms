function buildResultsBody(body) {
    var template = "<tr><td class='input'>{INPUT}</td><td class='output'>{OUTPUT}</td></tr>";

    var result = "";

    for(var x=0;x<10;x++) {
        var test = body.tests[x];

        var row = template.replace("{INPUT}", test.input).replace("{OUTPUT}", test.output);

        result += row;
    }

    return result;
}

function buildResultsTable(results) {
    var table = "<table class='result-table'><tr><td>{HEADER}</td></tr><tr><td><table><tr><td>Input</td><td>Output</td></tr>{BODY}</table></td></tr></table>";

    table = table.replace("{HEADER}", results.header);

    var body = buildResultsBody(results.body);

    table = table.replace("{BODY}", body);

    return table;
}

function buildResults(header, input, output) {
    var result = {header:header, body:{tests:[{input:input, output:output}]}};

    return result;
}

function runSorts() {
    var bubbleInputCopy = [1,1,8,4,9,2,3,6,2];
    var bubbleInput = [1,1,8,4,9,2,3,6,2];
    var bubbleOutput = bubbleSort(bubbleInput);
    var bubbleResults = buildResults("Bubble Sort", bubbleInputCopy, bubbleOutput);
    var bubbleTable = buildResultsTable(bubbleResults);
    var $bubbleTableEl = $.parseHTML(bubbleTable);

    $("body").append($bubbleTableEl);

    var quickInputCopy = [1,1,8,4,9,2,3,6,2];
    var quickInput = [1,1,8,4,9,2,3,6,2];
    var quickOutput = quickSort(quickInput);
    var quickResults = buildResults("Quick Sort", quickInputCopy, quickOutput);
    var quickTable = buildResultsTable(quickResults);
    var $quickTableEl = $.parseHTML(quickTable);

    $("body").append($quickTableEl);
}

function runLinearSearch(input, item) {
    var linearSearchInput = input;
    var linearSearchItem = item;
    var linearSearchOutput = linearSearch(linearSearchInput,linearSearchItem);
    var linearSearchResults = buildResults("Linear Search for "+item, linearSearchInput, linearSearchOutput);
    var linearSearchTable = buildResultsTable(linearSearchResults);
    var $linearSearchTableEl = $.parseHTML(linearSearchTable);

    return $linearSearchTableEl;
}

function runBinarySearchArray(input, item) {
    var searchInput = input;
    var searchItem = item;
    var searchOutput = binarySearchArray(searchInput,searchItem);
    var searchResults = buildResults("Binary Array Search for "+item, searchInput, searchOutput);
    var searchTable = buildResultsTable(searchResults);
    var $searchTableEl = $.parseHTML(searchTable);

    return $searchTableEl;
}

function runSearches() {
    var $linearSearchOne = runLinearSearch([1,1,8,4,9,2,3,6,2], 9);

    $("body").append($linearSearchOne);

    var $linearSearchTwo = runLinearSearch([1,1,8,4,9,2,3,6,2], 6);

    $("body").append($linearSearchTwo);

    var $linearSearchThree = runLinearSearch([1,1,8,4,9,2,3,6,2], 2);

    $("body").append($linearSearchThree);

    var $linearSearchFour = runLinearSearch([1,1,8,4,9,2,3,6,2], 39);

    $("body").append($linearSearchFour);

    //binarySearchArray
    var $binaryArraySearchOne = runBinarySearchArray([1,1,8,4,9,2,3,6,2], 9);

    $("body").append($binaryArraySearchOne);

    var $binaryArraySearchOne = runBinarySearchArray([1,1,8,4,9,2,3,6,2], 6);

    $("body").append($binaryArraySearchOne);

    var $binaryArraySearchThree = runBinarySearchArray([1,1,8,4,9,2,3,6,2], 2);

    $("body").append($binaryArraySearchThree);

    var $binaryArraySearchFour = runBinarySearchArray([1,1,8,4,9,2,3,6,2], 39);

    $("body").append($binaryArraySearchFour);
}

$(document).on("ready", function(){
    runSorts();
    runSearches();
});
