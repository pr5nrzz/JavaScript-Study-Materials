const li = document.createElement("li");

li.className = "child";

// li.innerText = "Item4";
const text = document.createTextNode("Item 4");

li.appendChild(text);

document.querySelector(".parent").appendChild(li);

console.log(li);