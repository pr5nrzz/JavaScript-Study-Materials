// window.addEventListener("keydown", e => {
//     document.querySelector("#insert").innerHTML = 
//     `
//         <div class="key">
//             e.key
//             <small>${e.key === ' ' ? 'Space' : e.key}</small>
//         </div>
//         <div class="key">
//             e.keyCode
//             <small>${e.keyCode}</small>
//         </div>
//         <div class="key">
//             e.code
//             <small>${e.code}</small>
//         </div>  
//     `;
// });

const insertElement = document.querySelector("#insert");

window.addEventListener("keydown", e => {
    insertElement.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    };

    for (key in keyCodes) {
        const div = document.createElement("div");
        div.className = "key";
        div.appendChild(document.createTextNode(key));

        const small = document.createElement("small");
        small.appendChild(document.createTextNode(keyCodes[key]));

        div.appendChild(small);

        insertElement.appendChild(div);
    }
});