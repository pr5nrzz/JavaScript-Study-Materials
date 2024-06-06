const x = 50; // Doesn't get added to the global window object
var foo = 250; // Gets added to global window object

if (true) {
    const y = 10; // y is block scoped

    console.log(x + y);
}

// console.log(x + y);

for (let i = 0; i <= 10; i++) {
    console.log(i); // i is block scoped
}

// console.log(i);

if (true) {
    const a = 100;
    let b = 200;
    var c = 300;
}

// console.log(a); // Block scoped
// console.log(b); // Block scoped
console.log(c); // Global Scoped

function run() {
    var d = 25;
    console.log(d);
}

run();
// console.log(d); // d is function scoped