//js -> por defecto utiliza CommonJS
//mjs -> para utilizar ES modules
//.cjs -> para utilizar CommonJS
//Common JS require module
// const { suma } = require(".sum");

import { suma, mult } from "./sum.mjs";

console.log(suma(4, 5));
console.log(mult(4, 5));
