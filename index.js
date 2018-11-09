function runSorts() {
  const bubbleInputCopy = [1, 1, 8, 4, 9, 2, 3, 6, 2];
  const bubbleInput = [1, 1, 8, 4, 9, 2, 3, 6, 2];
  const bubbleOutput = bubbleSort(bubbleInput);
  const bubbleResults = buildResults('Bubble Sort', bubbleInputCopy, bubbleOutput);
  const bubbleTable = buildResultsTable(bubbleResults);
  const $bubbleTableEl = $.parseHTML(bubbleTable);

  $('body').append($bubbleTableEl);

  const quickInputCopy = [1, 1, 8, 4, 9, 2, 3, 6, 2];
  const quickInput = [1, 1, 8, 4, 9, 2, 3, 6, 2];
  const quickOutput = quickSort(quickInput);
  const quickResults = buildResults('Quick Sort', quickInputCopy, quickOutput);
  const quickTable = buildResultsTable(quickResults);
  const $quickTableEl = $.parseHTML(quickTable);

  $('body').append($quickTableEl);
}

function runLinearSearch(input, item) {
  const linearSearchInput = input;
  const linearSearchItem = item;
  const linearSearchOutput = linearSearch(linearSearchInput, linearSearchItem);
  const linearSearchResults = buildResults(
    `'Linear Search for ' + ${item}`,
    linearSearchInput,
    linearSearchOutput,
  );
  const linearSearchTable = buildResultsTable(linearSearchResults);
  const $linearSearchTableEl = $.parseHTML(linearSearchTable);

  return $linearSearchTableEl;
}

function runBinarySearchArray(input, item) {
  const searchInput = input;
  const searchItem = item;
  const searchOutput = binarySearchArray(searchInput, searchItem);
  const searchResults = buildResults(`Binary Array Search for ${  item}`, searchInput, searchOutput);
  const searchTable = buildResultsTable(searchResults);
  const $searchTableEl = $.parseHTML(searchTable);

  return $searchTableEl;
}

function runSearches() {
  runLinearSearch([1, 1, 8, 4, 9, 2, 3, 6, 2], 9);
  runLinearSearch([1, 1, 8, 4, 9, 2, 3, 6, 2], 6);
  runLinearSearch([1, 1, 8, 4, 9, 2, 3, 6, 2], 2);
  runLinearSearch([1, 1, 8, 4, 9, 2, 3, 6, 2], 39);

  // binarySearchArray
  runBinarySearchArray([1, 1, 8, 4, 9, 2, 3, 6, 2], 9);
  runBinarySearchArray([1, 1, 8, 4, 9, 2, 3, 6, 2], 6);
  runBinarySearchArray([1, 1, 8, 4, 9, 2, 3, 6, 2], 2);
  runBinarySearchArray([1, 1, 8, 4, 9, 2, 3, 6, 2], 39);
}

runSorts();
runSearches();
