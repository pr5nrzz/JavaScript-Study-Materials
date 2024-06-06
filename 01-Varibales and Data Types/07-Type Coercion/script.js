let x;

x = 5 + '5'; // '5' implicitly converted to string

x = 5 + +'5'; // Explicit conversion

x = 5 * '5'; // '5' implicity converted to number

x = 5 + null; // null implicitly converted to 0

x = +null; // null explicitly converted to 0

x = +true; // true explicitly converted to number

x = +false; // false explicitly converted to number

x = 5 + true; // true implicitly converted to number

x = 5 + false; // false implicitly converted to number

x = 5 + undefined; // Any arithmetic operation with undefined will result to NaN


console.log(x, typeof x);