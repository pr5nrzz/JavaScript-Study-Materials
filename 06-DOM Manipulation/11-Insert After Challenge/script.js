const createElement = (elName, classes, text) => {
    const newEl = document.createElement(elName);
    newEl.className = classes;

    if (text) {
        newEl.appendChild(document.createTextNode(text));
    }

    return newEl;
}

const insertAfter = (newEl, existingEl) => {
    // existingEl.insertAdjacentElement("afterend", newEl);
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

const init = () => {
    const secondItem = document.querySelector(".child:nth-child(2)");

    const newEl = createElement("li", "child", "Item After");

    const icon = createElement("i", "fas fa-close");
    newEl.appendChild(icon);

    insertAfter(newEl, secondItem);
}

init();

