const http = require('node:http');
const { findAvailablePort } = require('./10.freeport-excersice.js');

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log('Request recieved');
  res.end('Hola Mundo'); //clausula de envío
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
findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
});
