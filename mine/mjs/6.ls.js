const fs = require('node:fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Error de directorio: ', err);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});
