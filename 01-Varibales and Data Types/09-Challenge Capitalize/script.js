const myString = "developer";

// const newString = myString.charAt(0).toUpperCase() +
//     myString.slice(1);

const newString = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;

console.log(newString);