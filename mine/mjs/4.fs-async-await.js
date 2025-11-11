//Async Await se utiliza ES o sea cambiarlo a nodos NO COMMON JS

//IIFE --> Inmediatyle Invoked Function Expression
// (() => {})(); //Sintaxis basica

/*
//Una forma de IIFE
(function () {
  const secret = 'you cant see me';
  console.log('Dentro', secret);
})();
// console.log(secret); //Secret no existe afuera is not defined
//Otra forma de IIFE renombrando
const resultado = (function (a, b) {
  return a + b;
})(3, 4);
console.log(resultado); //Se auntoinvoca la funcion despues de haber creado anteriormente se hacía asi
//Sintaxis general
(function () {
  // código aquí
})();  // ← estos paréntesis finales hacen que se ejecute
*/
const { readFile } = require('node:fs/promises');

(async () => {
  console.log('<----Leyendo el Primer archivo---->\n');

  const text = await readFile('./archivo.txt', 'utf-8');
  console.log('Primer texto:\n', text);

  console.log('Hacer cosas mientras lee el arhicvo \n\n');

  console.log('<----Leyendo el Segundo archivo---->');
  const text2 = await readFile('./archivo2.txt', 'utf-8');
  console.log('Segundo texto:\n', text2);
})();

async function init() {
  console.log('Aqui va el codigo ');
}
init();

//Esto es exactamente que el codigo de arriba de llamarlo
