// Ways to declare a variable
// var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);
// console.log(firstName, lastName, age);

let age = 30;
// var age = 30;
console.log(age);

/* 
    Naming Convention
    Use letters, digits(1 - 9), underscore and dollar
    Can't use digits in the prefix
*/

let _score = 10;
console.log(_score);

// let 1score  = 20; 
let score1 = 15;
console.log(score1);

let $score = 20;
console.log($score);

/* 
    Some ways to name vaiables - 
    // Camel case
    // Using underscore
    // Pascal Case
    // Lower Case
*/

let emailAddress = "xyz@gmail.com"; // Came case
let email_address = "abc@gmail.com"; // Underscore
let EmailAddress = "qrt@gmail.com"; // Pascal Case
let emailaddress = "test@gmail.com"; // Lowercase

let z;
console.log(z);

z = 50;
console.log(z);

const y = 20;
console.log(y);

// y = 30; // Variables using const cannot be reassigned

// const z; // Const variables msut be initialized at the time of decalration

const arr = [1, 2, 3, 4];
console.log(arr);

// arr = [];
arr.push(5);
console.log(arr);

const person = {
    name: "John"
};
console.log(person);

// person = {};
person.name = "Brad";
person.email = "brad@gmail.com";

console.log(person);

// Declaring multiple variables in one line
let t1, t2, t3;

const z1 = 10, z2 = 20, z3 = 30;