let date;

date = new Date();

date = date.toString();

date = new Date(2024, 3, 20, 12, 30, 25);

date = new Date("2024-04-20T12:30:00");

date = new Date("04/20/2024");

date = Date.now();

date = new Date("04-20-2024 12:30:00");

date = date.getTime();

date = new Date(date);

// date = date.getFullYear();

// date = date.getMonth();

// date = date.getDate();

// date = date.getDay();

// date = date.getHours();

// date = date.getMinutes();

// date = date.getSeconds();

// date = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;

// date = Intl.DateTimeFormat("en-US").format(date);

// date = Intl.DateTimeFormat("en-GB").format(date);

// date = Intl.DateTimeFormat("default").format(date);

// date = Intl.DateTimeFormat("default", { month: "long" }).format(date);

// date = date.toLocaleString("default", { month: "short" });

x = date.toLocaleString("default", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});

console.log(x);

// console.log(date, typeof date);