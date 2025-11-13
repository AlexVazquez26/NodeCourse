const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors'); //Comes from picocolors dependencie

// process.argv[2] brings up the path you wrote in the terminal.
const rutaInput = process.argv[2] ?? '.';

// Normalise the path (automatically correct slashes)
const ruta = path.resolve(rutaInput);

async function readNames(route) {
  try {
    return await fs.readdir(route);
  } catch {
    console.log('No se pudo acceder a la carpeta:', route);
    process.exit(1);
  }
}
//Names it is an array
readNames(ruta).then((names) => {
  names.forEach(async (name) => {
    //=> Loops through the array of names returned when using the above method (readnames)
    const rutaCompleta = path.join(ruta, name);
    try {
      const info = await fs.stat(rutaCompleta); //<----- obtains specific information from the file
      const type = info.isDirectory() ? '📁' : '📄'; //<---- If it is a folder or document, IT IS A METHOD.
      console.log(
        pc.bold(
          `${type}-${name.padEnd(30, '-')}> | Size: ${info.size
            .toString()
            .padEnd(7, '-')}> | Mod ${info.mtime.toLocaleString()}`
        )
      );
    } catch {
      console.log('No se pudo acceder al archivo: ', name);
      process.exit(1);
    }
  });
});

console.log('Ruta de busqueda ----> ', ruta);
