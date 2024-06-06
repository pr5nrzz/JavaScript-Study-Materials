const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
    firstName,
    lastName,
    age
};

console.log(person);

const todo = {
    id: 1,
    title: "Buy Milk",
    user: {
        name: "Dave"
    }
};

const { id: todoId, title, user: { name } } = todo;

console.log(todoId, title, name);