const listItems = document.querySelectorAll("#juice-items li");

listItems.forEach((item, index) => {
    item.style.color = "red";
    item.style.backgroundColor = "black";

    if (index === 1) {
        item.remove();
    }
});

console.log(listItems);