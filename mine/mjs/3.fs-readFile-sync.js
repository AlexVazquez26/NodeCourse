//Esto es realizando callbacks
const fs = require('node:fs');
//Se puede transformar de callback a promesa de esta forma:
//Modulos nativos que no tienen promesas
//======================================
// const { promisify } = require('node:util');
// const readFile = promisify(fs.readFile);
//======================================

console.log('Leyendo el primer archivo\n');
//readFile (normal) no es asincrono

//Crea callbacks
const text = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log('Primer texto:\n', text, '\n');
//Una vez que termines  haz esto, no me esperes pues
console.log('<----Leyendo el Segundo archivo---->');
//readfileSync es sincrono
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log('Segundo texto:\n', text2);
