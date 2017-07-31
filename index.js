function buildResultsBody(body) {
    let template = "<tr><td class='input'>{INPUT}</td><td class='output'>{OUTPUT}</td></tr>";

    let result = "";

    for(let x=0;x<10;x++) {
        let test = body.tests[x];

        let row = template.replace("{INPUT}", test.input).replace("{OUTPUT}", test.output);

        result += row;
    }

    return result;
}

function buildResultsTable(results) {
    let table = "<table class='result-table'><tr><td>{HEADER}</td></tr><tr><td><table><tr><td>Input</td><td>Output</td></tr>{BODY}</table></td></tr></table>";

    table = table.replace("{HEADER}", results.header);

    let body = buildResultsBody(results.body);

    table = table.replace("{BODY}", body);

    return table;
}

function buildResults(header, input, output) {
    let result = {header:header, body:{tests:[{input:input, output:output}]}};

    return result;
}

function runSorts() {
    let bubbleInputCopy = [1,1,8,4,9,2,3,6,2];
    let bubbleInput = [1,1,8,4,9,2,3,6,2];
    let bubbleOutput = bubbleSort(bubbleInput);
    let bubbleResults = buildResults("Bubble Sort", bubbleInputCopy, bubbleOutput);
    let bubbleTable = buildResultsTable(bubbleResults);
    let $bubbleTableEl = $.parseHTML(bubbleTable);

    $("body").append($bubbleTableEl);

    let quickInputCopy = [1,1,8,4,9,2,3,6,2];
    let quickInput = [1,1,8,4,9,2,3,6,2];
    let quickOutput = quickSort(quickInput);
    let quickResults = buildResults("Quick Sort", quickInputCopy, quickOutput);
    let quickTable = buildResultsTable(quickResults);
    let $quickTableEl = $.parseHTML(quickTable);

    $("body").append($quickTableEl);
}

function runLinearSearch(input, item) {
    let linearSearchInput = input;
    let linearSearchItem = item;
    let linearSearchOutput = linearSearch(linearSearchInput,linearSearchItem);
    let linearSearchResults = buildResults("Linear Search for "+item, linearSearchInput, linearSearchOutput);
    let linearSearchTable = buildResultsTable(linearSearchResults);
    let $linearSearchTableEl = $.parseHTML(linearSearchTable);

    return $linearSearchTableEl;
}

function runBinarySearchArray(input, item) {
    let searchInput = input;
    let searchItem = item;
    let searchOutput = binarySearchArray(searchInput,searchItem);
    let searchResults = buildResults("Binary Array Search for "+item, searchInput, searchOutput);
    let searchTable = buildResultsTable(searchResults);
    let $searchTableEl = $.parseHTML(searchTable);

    return $searchTableEl;
}

function runSearches() {
    runLinearSearch([1,1,8,4,9,2,3,6,2], 9);
    runLinearSearch([1,1,8,4,9,2,3,6,2], 6);
    runLinearSearch([1,1,8,4,9,2,3,6,2], 2);
    runLinearSearch([1,1,8,4,9,2,3,6,2], 39);

    //binarySearchArray
    runBinarySearchArray([1,1,8,4,9,2,3,6,2], 9);
    runBinarySearchArray([1,1,8,4,9,2,3,6,2], 6);
    runBinarySearchArray([1,1,8,4,9,2,3,6,2], 2);
    runBinarySearchArray([1,1,8,4,9,2,3,6,2], 39);
}

runSorts();
runSearches();


