const insertElement = () => {
    const items = document.querySelector(".parent");

    const paragraph = document.createElement("p");
    paragraph.appendChild(
        document.createTextNode("Random text added before the items")
    );

    items.insertAdjacentElement("beforebegin", paragraph);
}

const insertText = () => {
    const item = document.querySelector(".child:first-child");

    item.insertAdjacentText("afterbegin", "Random Text");
}

const insertHTML = () => {
    const item = document.querySelector(".child:last-child");

    item.insertAdjacentHTML("afterend", "<button>Clear All</button>");
}

const insertBeforeItem = () => {
    const items = document.querySelector(".parent");

    const newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode("New Item"));
    newItem.className = "child";

    const secondItem = document.querySelector(".child:nth-child(2)");

    items.insertBefore(newItem, secondItem);
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();