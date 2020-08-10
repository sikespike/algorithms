const arr = [1, 1, 2, 3, 4, 5, 6, 7, 2, 3, 4];

const result = new Map();

arr.forEach((item) => {
  if(result.has(item)) {
    result.set(item, result.get(item) + 1);
  } else {
    result.set(item, 1);
  }
});

result.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
