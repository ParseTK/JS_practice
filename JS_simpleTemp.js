// Temperature in kelvin
const kelvin = 298;

// converts kelvin to celsius
const celsius = kelvin - 273;

// fahrenheit conversion
let fahrenheit = celsius * (9/5) + 32;

// Rounds fahrenheit down
Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton conversion
let newton = celsius * (33/100);

// Rounds down
Math.floor(newton);

console.log(`Newton scale ${newton}`);
