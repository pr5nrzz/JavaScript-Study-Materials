let output;

// output = document.getElementById("app-title");
// // output = document.getElementById("app-title").id;
// output = document.getElementById("app-title")
//     .getAttribute("id");

// const title = document.getElementById("app-title");
// title.setAttribute("title", "New title");

// title.textContent = "Hello World!";
// title.innerText = "Hello Again!";
// title.innerHTML = "<strong>Inner HTML</strong>"

const link = document.getElementById("link");
link.style.textDecoration = "none";
link.style.display = "inline-block";
link.style.fontSize = "1rem";
link.style.padding = "0.5em 2em";
link.style.backgroundColor = "seagreen";
link.style.color = "white";
link.style.borderRadius = "5px";
link.style.marginBottom = "1em";

output = document.querySelector("h1");
output = document.querySelector("#app-title");
output = document.querySelector("input[type='text']");

const juiceItems = document.querySelector("#juice-items");
const secondItem = juiceItems.querySelector("li:nth-child(2)");

juiceItems.style.listStyle = "none";
juiceItems.style.margin = 0;
juiceItems.style.padding = 0;

secondItem.style.color = "Orange";
secondItem.style.backgroundColor = "black";

console.log(secondItem);