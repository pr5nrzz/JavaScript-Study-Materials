let x;

// Array Literal
const numbers = [10, 20, 30, 40 , 50];

// Array Constructor
const fruits = new Array("apple", "grape", "orange");

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My facorite fruit is ${fruits[0]}.`;

x = numbers.length;

fruits[1] = "pomogranate";
x = fruits;

// fruits.length = 2;

fruits[fruits.length] = "strawberry";
fruits[fruits.length] = "blueberry";

console.log(x);