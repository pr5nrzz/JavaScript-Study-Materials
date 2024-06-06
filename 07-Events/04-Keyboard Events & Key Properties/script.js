const inputElement =
    document.querySelector("input[type='text']");

// const onKeyPress = e => {
//     console.log("key pressed");
// }

// const onKeyUp = e => {
//     console.log("key up");
// }

const onKeyDown = e => {
    // console.log("key down");

    console.log(e.key);
    console.log(e.keyCode);
}

// inputElement.addEventListener("keypress", onKeyPress);
// inputElement.addEventListener("keyup", onKeyUp);
inputElement.addEventListener("keydown", onKeyDown);