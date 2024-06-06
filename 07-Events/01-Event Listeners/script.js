const clearButton = document.querySelector("#clear");

const clear = () => {
    // const items = document.querySelectorAll(".child");
    // items.forEach(item => item.remove());

    const itemList = document.querySelector(".parent");

    while(itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

// clearButton.onclick = clear;

// clearButton.onclick = () => {
//     console.log("Clear Items");
// }

clearButton.addEventListener("click", clear);

// clearButton.addEventListener("click", () => console.log("Clicked"));

// setTimeout(() =>
//     clearButton.removeEventListener("click", clear),
//     5000);

// setTimeout(() => clearButton.click(), 5000);