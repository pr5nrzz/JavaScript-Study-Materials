const x = 10; // Global scoped variable

function run() {
    console.log(window.innerHeight); // window is a global object
    console.log(x);
}

run();

function add() {
    const y = 50; // Function scoped variable
    console.log(x + y);
}

add();

console.log(x); // Global scoped variable accesses everywhere 
// console.log(y); // Function scoped variable

function subtract() {
    const z = 5;
    const x = 6; // Here x is function scoped
    // It is shadowing global variable x

    // console.log(y); // y variable scoped to function add

    console.log(x - z);
}

subtract();

{
    console.log(x);
}