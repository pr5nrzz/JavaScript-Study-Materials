const form = document.querySelector("form");

form.addEventListener("submit", e => e.preventDefault());

document.querySelector("input[type='submit']")
.addEventListener("click", (e) => {
    console.log("Button Clicked!");
    e.stopPropagation();
});

document.querySelector(".form-control:nth-of-type(2)")
.addEventListener("click", () => {
    console.log("Div Clicked!");
});

form.addEventListener("click", () => {
    console.log("Form Clicked!");
});

document.body.addEventListener("click", () => {
    console.log("Body Clicked!");
});


