// function add(a, b) {
//     return a + b;
// }

// Arrow Function
const add = (a, b) => {
    return a + b;
}

// Implicit Return
const subtract = (a, b) => a - b;

// We can omit the paranthesis if there is a single paramter
const double = value => value * 2;

// Returning an object
const createObj = () => ({ name: "Brad" });

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(5));
console.log(createObj());