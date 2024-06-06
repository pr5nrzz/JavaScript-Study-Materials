const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum);

const cart = [
    { id: 1, name: "Product 1", price: 130 },
    { id: 2, name: "Product 2", price: 150 },
    { id: 3, name: "Product 3", price: 175 }
];

// const totalPrice = cart
//     .map(product => product.price)
//     .reduce((acc, curr) => acc + curr);

const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(totalPrice);