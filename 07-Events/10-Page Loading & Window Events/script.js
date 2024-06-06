// window.onload = () => {
//     document.querySelector("h1").innerText = "Hello World";
// };

// window.addEventListener("load", () => {
//     // document.querySelector("h1").innerText = "Hello World";
//     console.log("Page Loaded");
// });

// window.addEventListener("DOMContentLoaded", () => {
//     console.log("DOM Loaded");
// });

// console.log("Run Me");

// document.querySelector("h1").innerText = "Hello World";

// window.addEventListener("resize", () => {
//     document.querySelector("h1").innerText = 
//     `${window.innerWidth} x ${window.innerHeight}`;
// });

window.addEventListener("scroll", () => {
    // console.log(`${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = "tomato";
    } else {
        document.body.style.backgroundColor = "seagreen";
    }
});

window.addEventListener("focus", () => {
    document.querySelectorAll(".child").forEach(item => {
        item.style.backgroundColor = "black";
    });
});

window.addEventListener("blur", () => {
    document.querySelectorAll(".child").forEach(item => {
        item.style.background = "none";
    });
});