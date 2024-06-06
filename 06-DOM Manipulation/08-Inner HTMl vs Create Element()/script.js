// Quick and Dirty
const createElement = (item) => {
    const li = document.createElement("li");

    li.innerHTML = `<li class="child">
    ${item}
    <i class="fas fa-close"></i>
    </li>`;

    document.querySelector(".parent").appendChild(li);
}

// Clean and Performant
const createNewItem = (item) => {
    const li = document.createElement("li");
    li.className = "child";

    const text = document.createTextNode(`${item}`);
    li.appendChild(text);

    const icon = document.createElement("i");
    icon.className = "fas fa-close";

    li.appendChild(icon);

    document.querySelector(".parent").appendChild(li);
}

createElement("Item 4");
createNewItem("Item 5");