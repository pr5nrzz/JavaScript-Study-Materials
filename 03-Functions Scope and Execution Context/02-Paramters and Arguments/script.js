// Default Params
function registerUser(user = "Bot") {
    // if (!user) {
    //     user = "Bot";
    // }

    return `${user} is registered.`;
}

console.log(registerUser());

// Rest Params
function addition(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}

console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 120));

// Objects as params
function loggedInUser(user) {
    return `The user ${user.name} is logged in with id ${user.id}`;
}

const user = {
    id: 1,
    name: "John"
};

console.log(loggedInUser(user));
console.log(loggedInUser({
    id: 2,
    name: "Sara"
}));

// Array as params
function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

console.log(random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));