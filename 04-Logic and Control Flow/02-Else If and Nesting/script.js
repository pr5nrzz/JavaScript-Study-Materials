const date = new Date("06-03-2024T17:30:00");
const hours = date.getHours();

if (hours >= 12 & hours < 16) {
    console.log("Good Afternoon");
} else if (hours >= 1 & hours < 12) {
    console.log("Good Morning");
} else {
    console.log("Good Evening");
}

if (hours >= 12 & hours < 16) {
    console.log("Good Afternoon");
} else if (hours >= 1 & hours < 12) {
    console.log("Good Morning");

    if (hours === 6) {
        console.log("Wake Up!");
    }
} else {
    console.log("Good Evening");

    if (hours > 23) {
        console.log("zzzzzzz");
    }
}