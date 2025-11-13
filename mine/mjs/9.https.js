const http = require('node:http');
const { findAvailablePort } = require('./10.freeport.js');

const server = http.createServer((req, resp) => {
  console.log('Request recieved');
  resp.end('Hola mundo');
});

//Utiliza un puerto, en especifico
//Pero si esta ocupado podríamos
//Ocupar el puerto 0
//Al ocupar el puerto 0 va
//A buscar el primero disponible
//Esto NO es recomendable para produccion

//Hay que hacerlo a modo desarrollo
// server.listen(0, () => {
//   console.log(
//     `Server listening on port: http://localhost:${server.address().port}`
//   );
// });

findAvailablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port: http://localhost:${port}`);
  });
});
