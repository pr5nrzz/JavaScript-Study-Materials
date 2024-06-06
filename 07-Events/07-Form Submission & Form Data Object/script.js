const form = document.querySelector("form");

// const onSubmit = e => {
//     e.preventDefault();

//     const input = document.getElementById("input-item");
//     const priority = document.getElementById("priority");

//     if (!input.value || priority.value === "0") {
//         console.log("Please enter mandatory field values.");
//         return;
//     }

//     console.log(input.value, priority.value);
// }

const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData(form);

    // const inputValue = formData.get("item");
    // const priorityValue = formData.get("priority");

    // console.log(inputValue, priorityValue);

    const entries = formData.entries();
    // console.log(entries);

    for (let entry of entries) {
        console.log(entry[1]);
    }
}

form.addEventListener("submit", onSubmit);