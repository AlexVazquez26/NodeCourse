//Async Await se utiliza ES o sea cambiarlo a nodos NO COMMON JS
import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8'),
]).then(([text, secondText]) => {
  console.log('Primer texto:\n', text);
  console.log('Segundo texto:\n', secondText);
});
