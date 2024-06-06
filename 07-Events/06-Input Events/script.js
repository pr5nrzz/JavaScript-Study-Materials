const itemInput = document.querySelector("input[type='text']");
const priorityInput = document.querySelector("#priority");
const checkboxInput = document.querySelector("#recurring");

const onInputChange = e => {
    console.log(e.target.value);
};

const onPriorityChange = e => {
    console.log(e.target.value);
};

const onChecked = e => {
    console.log(e.target.checked);
}

const onFocus = () => {
    itemInput.style.borderBottom = "1px solid white";
}

const onBlur = () => {
    itemInput.style.borderBottom = "1px solid #333";
}

itemInput.addEventListener("input", onInputChange);
priorityInput.addEventListener("input", onPriorityChange);
checkboxInput.addEventListener("input", onChecked);

itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);