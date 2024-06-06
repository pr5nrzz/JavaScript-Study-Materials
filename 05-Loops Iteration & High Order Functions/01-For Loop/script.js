// for (let i = 0; i <= 10; i++) {
//     console.log("Number " + i);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log("Number " + i);

//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

const names = ["Brad", "Traversy", "Tim", "John", "Sara", "dave"];

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Sara") {
        console.log(names[i] + " is the best");
    } else {
        console.log(names[i]);
    }
}
