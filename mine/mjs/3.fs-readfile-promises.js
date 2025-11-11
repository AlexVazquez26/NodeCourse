//Cuando se utiliza con promesas
//Esto es realizando callbacks
const fs = require('node:fs/promises');
const { threadName } = require('node:worker_threads');

console.log('Leyendo el primer archivo\n');

//readFile (normal) no es asincrono
//Con promesas
const text1 = fs.readFile('./archivo.txt', 'utf-8').then((text1) => {
  console.log('Primer texto:\n', text1, '\n');
});

console.log('Hacer cosas mientras lee el arhicvo \n\n');

console.log('<----Leyendo el Segundo archivo---->');
//readfileSync es sincrono
//esta linea de codigo no se puede ejecutar dado que no puede ir con el
//import, se debe de ocupar con file.async
// const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');

const text2 = fs.readFile('./archivo2.txt', 'utf-8').then((text2) => {
  console.log('Segundo texto:\n', text2);
});
