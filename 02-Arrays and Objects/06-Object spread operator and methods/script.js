let x;

const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.isCompleted = false;

x = todo;

const person = {
    address: {
        coordinates: {
            latitude: 24.4321,
            longitude: -7.4321
        }
    }
};

x = person.address.coordinates.latitude;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const newObj = {...obj1, ...obj2};

const newObj1 = Object.assign({}, obj1, obj2);

const todos = [
    {id: 1, name: "Buy Milk"},
    {id: 2, name: "Pickup Kids"},
    {id: 3, name: "Take out the trash"}
];

x = todos[0].name;

x = Object.keys(todo);

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty("name");

console.log(x);