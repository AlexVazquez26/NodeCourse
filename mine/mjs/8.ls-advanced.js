const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

async function ls(directory) {
  try {
    const files = await fs.readdir(folder);
  } catch {
    console.log('No se pudo leer el directorio', folder);
    process.exit(1);
  }
  fs.readdir(folder)
    .then((files) => {
      files.forEach((file) => {
        const filePath = path.join(folder, file);
        fs.stat(filePath);
        console.log(file);
      });
    })
    .catch((err) => {
      if (err) {
        console.log('Error al leer el directorio', err);
        return;
      }
    });
}

ls(folder);
