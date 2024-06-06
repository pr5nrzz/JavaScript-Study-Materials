const items = ["book", "lamp", "clock", "kite", "bottle"];
const users = [
    { name: "Brad" },
    { name: "Tim" },
    { name: "John" },
    { name: "Sara" },
    { name: "Dave" }
];

// for (const item of items) {
//     console.log(item);
// }

// for (const user of users) {
//     if (user.name === "Sara") {
//         console.log("Breaking...");
//         break;
//     }

//     console.log(user.name);
// }

const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
    console.log(key, value);
}