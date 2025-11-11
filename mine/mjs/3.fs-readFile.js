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
const text1 = fs.readFile('./archivo.txt', 'utf-8', (err, text1) => {
  //<---- Cuando termines ejecutas este callback
  console.log('Primer texto:\n', text1, '\n');
  //Una vez que termines  haz esto, no me esperes pues
});

console.log('Hacer cosas mientras lee el arhicvo \n\n');

console.log('<----Leyendo el Segundo archivo---->');
//readfileSync es sincrono
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log('Segundo texto:\n', text2);
