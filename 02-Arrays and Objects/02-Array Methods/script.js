let x;

const arr = [10, 20, 30, 40, 50];

// arr.push(60);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(30);

x = arr.indexOf(50);

x = arr.slice(1, 4);

// x = arr.splice(1, 4);

x = arr.splice(arr.indexOf(40), 1);

console.log(x, arr);