function foo() {
    const x = 10; // Scoped to function foo

    function bar() {
        const y = 20;

        console.log(x + y); // x is accessible as is child of foo func()
    }

    bar();
    // console.log(y); // y is scoped to function bar
}

foo();

if (true) {
    const x = 10;

    if (x === 10) {
        const y = 20;

        console.log(x + y);
    }

    // console.log(y); // y is scoped to inner block
}