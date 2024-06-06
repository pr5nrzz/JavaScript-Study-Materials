const calculator = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1 % num2;
        default:
            return "Not a valid operator";
    }
}

console.log(calculator(1, 2, "+"));
console.log(calculator(4, 2, "-"));
console.log(calculator(1, 2, "*"));
console.log(calculator(1, 2, "/"));
console.log(calculator(1, 2, "%"));
console.log(calculator(1, 2, ""));