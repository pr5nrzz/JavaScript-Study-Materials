const x = 10;
const y = 5;

if (x > 5) {
    console.log(`${x} is greater than ${y}.`);
}

if (x === 5) {
    console.log(`${x} is equal to ${y}.`);
} else {
    console.log(`${x} is not equal to ${y}.`);
}

if (x !== y) {
    const z = 20;

    console.log(z);
}

// console.log(z); // z is block scoped