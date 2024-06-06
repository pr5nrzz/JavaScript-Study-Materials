const createNewItem = (item) => {
    const li = document.createElement("li");
    li.className = "child";

    const text = document.createTextNode(`${item}`);
    li.appendChild(text);

    const icon = createIcon("fas fa-close");
    li.appendChild(icon);

    document.querySelector(".parent").appendChild(li);
}

const createIcon = (classes) => {
    const icon = document.createElement("i");
    icon.className = classes;

    return icon
}

createNewItem("Item 4");