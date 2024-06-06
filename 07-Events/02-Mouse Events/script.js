const heading = document.querySelector(".container h1 img");

const onClick = () =>  console.log("Clicked");

const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== "tomato") {
        document.body.style.backgroundColor = "tomato";
    } else {
        document.body.style.backgroundColor = "seagreen";
    }
}

const onRightClick = () => {
    console.log("Context Menu");
}

const onMouseDown = () => {
    console.log("Mouse Down Event");
}

const onMouseUp = () => {
    console.log("Mouse Up Event");
}

const onMouseWheel = () => {
    console.log("Mouse Wheel Event");
}

const onMouseOver = () => {
    console.log("Mouse Over Event");
}

const onMouseOut = () => {
    console.log("Mouse Out Event");
}

const onDragStart = () => {
    console.log("Drag Start Event");
}

const onDrag = () => {
    console.log("Drag Event");
}

const onDragEnd = () => {
    console.log("Drag End Event");
}

heading.addEventListener("click", onClick);
heading.addEventListener("dblclick", onDoubleClick);
heading.addEventListener("contextmenu", onRightClick);
heading.addEventListener("mousedown", onMouseDown);
heading.addEventListener("mouseup", onMouseUp);
heading.addEventListener("wheel", onMouseWheel);
heading.addEventListener("mouseover", onMouseOver);
heading.addEventListener("mouseout", onMouseOut);
heading.addEventListener("dragstart", onDragStart);
heading.addEventListener("drag", onDrag);
heading.addEventListener("dragend", onDragEnd);