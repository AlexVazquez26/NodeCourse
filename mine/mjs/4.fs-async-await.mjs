//Async Await se utiliza ES o sea cambiarlo a nodos NO COMMON JS
import { readFile } from 'node:fs/promises';

console.log('<----Leyendo el Primer archivo---->\n');

const text = await readFile('./archivo.txt', 'utf-8');
console.log('Primer texto:\n', text);

console.log('Hacer cosas mientras lee el arhicvo \n\n');

console.log('<----Leyendo el Segundo archivo---->');
const text2 = await readFile('./archivo2.txt', 'utf-8');
console.log('Segundo texto:\n', text2);
