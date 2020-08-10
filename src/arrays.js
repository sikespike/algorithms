let superHeroes = ['Spiderman', 'Iron Man'];
console.log(superHeroes);

superHeroes = [...superHeroes, 'Batman'];
console.log(superHeroes);

//flatten
let heroes = [
  ['Superman', 'Batman', 'Wonderwoman'],
  ['Spiderman', 'Iron Man', 'Hulk'],
];

console.log(heroes.flat());

heroes = [
  ['Superman', 'Batman', 'Wonderwoman'],
  [['Spiderman', 'Amazing Spiderman'], 'Iron Man', 'Hulk'],
];

//nested flatten
console.log(heroes.flat());
console.log(heroes.flat(Infinity));

console.log(heroes.join()); //.join('<delim>')

heroes = [
  { name: 'Spiderman', universe: 'Marvel' },
  { name: 'Iron Man', universe: 'Marvel' },
  { name: 'Hulk', universe: 'Marvel' },
  { name: 'Batman', universe: 'DC' },
  { name: 'Superman', universe: 'DC' },
  { name: 'Wonder Woman', universe: 'DC' },
];

const marvel = heroes.filter((h) => h.universe === 'Marvel');
console.table(marvel);

marvel.map((h) => (h.team = 'Avengers'));

console.table(marvel);

const numbers = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9, 9, 9, 10];
console.log(numbers.reduce((acc, cur) => acc + cur));

//resize array using length
var array = [1, 2, 3, 4, 5, 6];
console.log(array);
console.log(array.length); // 6
array.length = 3;
console.log(array.length); // 3
console.log(array); // [1,2,3]

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(array1.concat(array2)); // [1,2,3,4,5,6];

let myArray = ['a', 'b', 'c', 'd'];
console.log(myArray);
myArray.splice(1, 1);
console.log(myArray);
myArray = ['a', 'b', 'c', 'd'];
myArray.splice(1, 2)[('a', 'b')];
console.log(myArray);

array = [1, 2, 3, 4, 5, 6];
console.log(array);
console.log(array.slice(-1)); // [6]
console.log(array.slice(-2)); // [5,6]
console.log(array.slice(-3)); // [4,5,6]
console.log(array.slice(1, 2));
console.log(array.slice(1, 3));
console.log(array.slice(1, 4));

//const [user, account] = await Promise.all([fetch('/user'), fetch('/account')]);

//swap
let a = 'world',
  b = 'hello';
[a, b] = [b, a];
console.log(a); // -> hello
console.log(b); // -> world

// Find max value
const max = (arr) => Math.max(...arr);
console.log(max([123, 321, 32])); // outputs: 321

// Sum array
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4])); // output: 10
