let x;

const name = "John";
const age = 30;

x = "Hello, my name is " + name + " and I am " + age +
    " years old.";

// Template Literal
x = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(x);

const s = new String("Hello World"); // Wrapper object

x = s.length;

x = s[0];

x = s.charAt(2);

x = s.indexOf('l');

x = s.lastIndexOf('l');

x = s.toUpperCase();

x = s.toLowerCase();

x = s.substring(0, 4);

x = s.substring(6);

x = s.slice(-11);

x = "         Hello World";
x = x.trim();

x = s.replace("World", "John");
x = s.replace("H", "Y");

x = s.includes("Hello");
x = s.includes("Hell");
x = s.includes("Helli");

x = s.valueOf();

x = s.split();
x = s.split(" ");
x = s.split("");

console.log(x);