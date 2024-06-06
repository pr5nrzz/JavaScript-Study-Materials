console.log(addDollarSign(200)); // Function declarations are hoisted
// Function Declaration
function addDollarSign(value) {
    return `$${value}`;
}


// console.log(addPlusSign(300)); // Not hoisted
// Function Expression
const addPlusSign = function(value) {
    return `+${value}`;
};
