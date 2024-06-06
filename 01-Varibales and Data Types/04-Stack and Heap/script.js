// These variable are stored in stack
let name = "Brad";
let age = 30;

// These are stored in heap
let person  = {
    name: "John",
    age: 35
};

let newName = name;
newName = "Bradley";

let newPerson  = person;
newPerson.name = "Cooper";

console.log(name, newName);
console.log(person, newPerson);

