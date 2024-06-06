(() => {
    const user = "Travis";
    console.log(user);

    const hello = () => console.log("Hello from inside IIFE");
    hello();
})();

((name) => {
    console.log(name);
})("Dave");