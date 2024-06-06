const date = new Date(2024, 1, 20, 13, 30, 0);
const month = date.getMonth();
const hour = date.getHours();

console.log(hour);

switch (month) {
    case 1:
        console.log("It is January!");
        break;
    case 2:
        console.log("It is February!");
        break;
    case 3:
        console.log("It is March!");
        break;
    default:
        console.log("It is not Jan, Feb or Mar");
}

switch(true) {
    case hour > 12 && hour < 16:
        console.log("Good Afternoon!");
        break;
    case hour >= 16 && hour < 21:
        console.log("Good Evening");
        break;
    case hour >= 21:
        console.log("Good Night!");
        break;
    default:
        console.log("Good Morning!");
}