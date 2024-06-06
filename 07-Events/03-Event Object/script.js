const onClick = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.currentTarget);

    // e.target.style.transform = "translateY(-5px)";

    // console.log(e.type);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY);
}

document.querySelector("input[type='submit']")
.addEventListener("click", (e) => {
    e.preventDefault();
});

// document.body.addEventListener("click", e => {
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

document.querySelector("#main-img")
    .addEventListener("click", onClick);