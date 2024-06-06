const getCelcius = farhenheit => `${farhenheit - 32 / 1.8}\xB0C`;

console.log(getCelcius(32));

const minMax = nums => (
    {
        minNum: Math.min(...nums),
        maxNum: Math.max(...nums)
    }
);

console.log(minMax([3, 7, 9, 4, 1, 2, 45, 30, 31]));

((width, height) => {
    console.log("The area of a rectangle with a width " +
        width + " height of " + height + " is " +
        width * height);
})(5, 5);