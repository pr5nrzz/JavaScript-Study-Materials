// const x = false;
// const x = 0;
// const x = "";
// const x = null;
// const x = undefined;
const x = NaN;

if (x) {
    console.log("It is a truthy value");
} else {
    console.log("It is a falsy value");
}

// const y = true;
// const y = "0";
// const y = " ";
// const y = "false";
// const y = [];
// const y = {};
const y = function() {};

if (y) {
    console.log("It is a truthy value");
} else {
    console.log("It is a falsy value");
}

// Truthy and falsy caveats
const numOfChildrens = 3;

if (!isNaN(numOfChildrens)) {
    console.log(`You have ${numOfChildrens} children(s)`);
} else {
    console.log("Please enter number of children(s)");
}

const posts = ["Post One", "Post Two"];

if (posts.length > 0) {
    console.log("List posts");
} else {
    console.log("No posts to list");
}

const user = { name: "Dave" };

if (Object.keys(user).length > 0) {
    console.log("User");
} else {
    console.log("No user");
}

console.log(false == 0);
console.log('' == 0);
console.log(NaN == 0);
console.log(null == undefined);
console.log(null == 0);
console.log(undefined == 0);
console.log(undefined == undefined);
console.log(null == null);




