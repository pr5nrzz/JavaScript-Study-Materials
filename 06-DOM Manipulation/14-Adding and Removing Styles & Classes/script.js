const changeCardTheme = () => {
    // console.log(listItems);
    // listItems.forEach(listItem =>
    //     listItem.className = "child card-theme");

    listItems.forEach(listItem => {
        // listItem.classList.add("card-theme");
        // listItem.classList.remove("child");

        // listItem.classList.toggle("card-theme");

        listItem.style.transform = "translateX(10px)";
        listItem.style.transition = "transform 250ms ease-in-out";
    });
}

const listItems = document.querySelectorAll(".child");
document.querySelector("#change-theme").onclick = changeCardTheme;