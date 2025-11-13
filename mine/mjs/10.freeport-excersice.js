const net = require('node:net');

// http es diferente que node pero node es mas rapido

//Esto crea un servidor
//const server = net.createServer();
// server.listen(0, () => {
//   console.log('Server listening on port http://localhost:${port}');
// });

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    //Intenta hacer conexion con el puerto deseado
    server.listen(desiredPort, () => {
      const { port } = server.address();
      //Aqui accede a la propiedad de server.address()
      //devuelve un objeto con
      // esta forma cuando el servidor ya está escuchando
      /*
      {
        port: 3000,
        family: 'IPv4',
        address: '127.0.0.1'
      }
      */
      //Entonces eso es lo mismo que hacer esto:
      /*
      const addressInfo = server.address();
      const port = addressInfo.port;
      */

      server.close(() => {
        //Despues cierra el servidor
        resolve(port);
      });
    });
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        findAvailablePort(0).then((port) => resolve(port));
      } else {
        reject(error);
      }
    });
  });
}

module.exports = { findAvailablePort };
