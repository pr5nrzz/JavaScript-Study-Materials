// const removeClearAllButton = () => {
//     document.querySelector("#clear").remove();
// }

// const removeFirstItem = () => {
//     const items = document.querySelector(".parent");
//     const firstItem = document.querySelector(".child:nth-child(1)");

//     items.removeChild(firstItem);
// }

const removeItem = (itemNumber) => {
    // const items = document.querySelectorAll(".child");

    // items.forEach((item, index) => {
    //     if (itemNumber === index) {
    //         item.remove();
    //     }
    // });

    const parent = document.querySelector(".parent");
    const childItem = document.querySelector(`.child:nth-child(${itemNumber})`);

    parent.removeChild(childItem);
}

// removeClearAllButton();
// removeFirstItem();
removeItem(1);