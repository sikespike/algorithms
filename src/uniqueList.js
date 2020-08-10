const arr = [1, 1, 2, 3, 4, 5, 6, 7, 2, 3, 4];

const result = new Set();

arr.forEach((item) => {
  result.add(item);
});

result.forEach((value, key) => {
  console.log(`key ${key}: value ${value}`);
});

//result.keys() result.values()

console.log('-------------');

const entries = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9, 9, 9, 10];
const uniqueEntries = [...new Set(entries)];

uniqueEntries.forEach((value, key) => {
  console.log(`key ${key}: value ${value}`);
});

let batman = { name: 'Batman' };
// batman.firstName = "Bruce";
// batman.lastName = "Wayne";
console.log(batman);

batman = { ...batman, firstName: 'Bruce', lastName: 'Wayne' };
console.log(batman);


const crypto = require('crypto');

function solve(first, second) {
  let firstCopy = first;
  let hashMap1 = [];
  let hashMap2 = [][];

  let currentWord = '';
  for (let x = 0; x < first.length; x++) {
    const index = Math.random(0 - first.length);

    const isEmpty = first[index] === '';

    if (isEmpty) {
      continue;
    } else {
      currentWord += first[index];
      first[index] = '';
    }
  }

  hashMap1[crypto.Hash(currentWord)];

  //

  if (first.length === second.length) {
    for (let x = 0; x < first.length; x++) {
      aabbccddee = 0
      first[x];
      second[x];
    }
  } else {
    return false;
  }
}
