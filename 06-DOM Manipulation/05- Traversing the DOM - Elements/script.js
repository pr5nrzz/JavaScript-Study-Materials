document.body.style.color = "rgba(0, 0, 0, 0.7)";
document.body.style.padding = "2rem";

let output;

const parent = document.querySelector(".parent");
parent.style.listStyle = "none";
parent.style.margin = 0;
parent.style.padding = 0;

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Item Two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "Item One";
parent.lastElementChild.innerText = "Item Three";

const childElement = document.querySelector(".child");
const parentElement = childElement.parentElement;

parentElement.style.border = "1px solid rgba(0, 0, 0, 0.7)";
parentElement.style.padding = "0.75em";

const secondItem = document.querySelector(".child:nth-of-type(2)");

const nextChildSibling = secondItem.nextElementSibling;
const previousChildSibling = secondItem.previousElementSibling;

nextChildSibling.style.color = "green";
previousChildSibling.style.color = "orange";

console.log(previousChildSibling.innerText);