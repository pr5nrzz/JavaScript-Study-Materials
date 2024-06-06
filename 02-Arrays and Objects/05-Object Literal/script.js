let x;

const person = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    address: {
        street: "1234 Main Street",
        city: "Boston",
        state: "MA"
    },
    hobbies: ["Music", "Cooking"]
};

x = person.name;

x = person["age"];

x = person.address.city;

x = person.hobbies;

person.name = "Jane Doe";

delete person.age;

person.hasChildren = false;

person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();

console.log(person);