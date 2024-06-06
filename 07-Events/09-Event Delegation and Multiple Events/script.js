const items = document.querySelectorAll(".child");
const list = document.querySelector(".parent");

// items.forEach(item => {
//     item.addEventListener("click", e => {
//         e.target.remove();
//     });
// });

list.addEventListener("click", e => {
    if (e.target.className.split(" ").includes("child")) {
        e.target.remove();
    }
});

list.addEventListener("mouseover", e => {
    if (e.target.className.split(" ").includes("child")) {
        e.target.classList = "child card-theme";
    }
});

list.addEventListener("mouseout", e => {
    if (e.target.className.split(" ").includes("child")) {
        e.target.classList = "child";
    }
});


