const replaceFirstItem = () => {
    const firstItem = document.querySelector(".child:first-child");

    const replacedItem = document.createElement("li");
    replacedItem.className = "child";
    replacedItem.appendChild(
        document.createTextNode("Replaced First")
    );

    const icon = document.createElement("i")
    icon.className = "fas fa-close";
    replacedItem.appendChild(icon);

    firstItem.replaceWith(replacedItem);
}

const replaceSecondItem = () => {
    const secondItem = document.querySelector(".child:nth-child(2)");

    secondItem.outerHTML = "<li class='child'>Replaced Second\
    <i class='fas fa-close'></i><li>";
}

const replaceAll = () => {
    const listItems = document.querySelectorAll(".child");

    listItems.forEach((listItem, index) =>
        index === 1 ? listItem.innerHTML =
            "Replaced Seond Item <i class='fas fa-close'></i>" :
            listItem.innerHTML = "Replaced All <i class='fas fa-close'></i>");
}

const replaceChildHeading = () => {
    const containerEl = document.querySelector(".container");
    const heading = document.querySelector(".container h1");

    const newHeading = document.createElement("h2");
    newHeading.id = "app-title";
    newHeading.appendChild(document.createTextNode("Replace Elements"));

    containerEl.replaceChild(newHeading, heading);
}

replaceFirstItem();
replaceSecondItem();
replaceAll();
replaceChildHeading();