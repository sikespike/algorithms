const linearSearch = (input, item) => {
  for (let x = 0; x < input.length; x++) {
    if (input[x] === item) {
      return x;
    }
  }

  return -1;
};

export default linearSearch;