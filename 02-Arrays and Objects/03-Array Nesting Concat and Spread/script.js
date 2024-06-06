let x;

const fruits = ["apple", "grape", "orange"];

const berries = ["blueberry", "strawberry", "cranberry"];

// Nesting
const allFruits = [fruits, berries];

x = allFruits[1][1];

// Concat
x = fruits.concat(berries);

// Spread Operator ...
x = [...fruits, ...berries];

// Flatten array
const arr = [1, [2, 3], 4, [4, 6], 7];
x = arr.flat();

// Static methods on Array object
x = Array.isArray(fruits);

x = Array.from(fruits.toString());

const a = 10, b = 20, c = 30;
x = Array.of(a, b, c);

console.log(x);