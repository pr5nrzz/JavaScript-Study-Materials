const age = 18;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Y5u can not vote");
}

age >= 18 ? console.log("You can vote!") :
    console.log("You can not vote");

const canVote = age >= 18 ? true : false;
console.log(canVote);

const canVote2 = age >= 18 ? "You can vote!" :
    "You can not vote";
console.log(canVote2);

const auth = false;
// let redirect;

// if (auth) {
//     alert("Wecome to the Dashboard!");
//     redirect = "/dashboard";
// } else {
//     alert("Access Denied");
//     redirect = "/login";
// }

// const redirect = auth ? (alert("Wecome to the Dashboard!"),
//     "/dashboard") : (alert("Access Denied"), "/login");

// console.log(redirect);

// console.log(auth ? "Welcome to the Dashboard!" : null);

console.log(auth && "Welcome to the Dashboard!");

