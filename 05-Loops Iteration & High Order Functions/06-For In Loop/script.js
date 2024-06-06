const colorsObj = {
    color1: "red",
    color2: "green",
    color3: "blue",
    color4: "yellow",
    color5: "orange"
};

for (const key in colorsObj) {
    console.log(key, colorsObj[key]);
}

const colorsArr = ["red", "green", "blue", "yellow", "orange"];

for (const key in colorsArr) {
    console.log(key, colorsArr[key]);
}