const addForm = document.querySelector("form");
const itemInput = document.getElementById("item");
const filterInput = document.querySelector(".filter");
const clearButton = document.querySelector(".clear");

const onSubmit = e => {
    e.preventDefault();

    const item = itemInput.value;

    if (!item) {
        itemInput.style.border = "2px solid darkred";

        document.querySelector(".error")
            .style.display = "block";

        return;
    }

    const list = document.querySelector(".list-items");
    const listItem = createListItem(item);

    // Add new item to the list
    list.appendChild(listItem);

    // Clear the item input once added
    itemInput.value = '';

    // Show other options if hidden
    if (!filterInput.style.display) {
        filterInput.style.display = "block";
    }

    if (!clearButton.style.display) {
        clearButton.style.display = "block";
    }
}

const createListItem = (value) => {
    const listItem = document.createElement("li");
    listItem.className = "item";
    listItem.appendChild(document.createTextNode(value));

    const button = document.createElement("button");

    const icon = document.createElement("i");
    icon.classList = "fas fa-close";

    button.appendChild(icon);

    listItem.appendChild(button);

    return listItem;
}

addForm.addEventListener("submit", onSubmit);