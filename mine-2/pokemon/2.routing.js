const http = require('node:http');
//commonJs --> modulos clasicos de node

const dittoJSON = require('./ditto.json');
const { json } = require('node:stream/consumers');

const processRequest = (req, resp) => {
  const { method, url } = req;

  switch (method) {
    case 'GET':
      switch (url) {
        case '/': {
          resp.setHeader('Content-Type', 'text/html; charset=uft-8');
          resp.end('<h1>My Page</h1>');
          break;
        }
        case '/pokemon/ditto': {
          resp.setHeader('Content-Type', 'application/json; charset=uft-8');
          resp.end(JSON.stringify(dittoJSON));
          break;
        }
        default: {
          resp.statusCode = 404;
          resp.setHeader('Content-Type', 'text/html; charset=uft-8');
          resp.end('<h1>My Page</h1>');
          break;
        }
      }
      break;

    case 'POST':
      switch (url) {
        case '/pokemon': {
          //Si vamos a ocupar el body varias veces
          //Lo mejor es dejarle los corchetes para que
          //no exista problemas de variables
          let body = '';
          //Escucha la el cuerpo de la peticion
          req.on('data', (chunk) => {
            body += chunk.toString();
          });
          req.on('end', () => {
            const data = JSON.parse(body);
            //Llama a una base de datos para guardar la info
            resp.writeHead(201, {
              'Content-Type': 'application/json; charset;utf-8',
            });
            resp.end(JSON.stringify(data));
          });
          break;
        }

        default: {
          resp.statusCode = 404;
          resp.setHeader('Content-Type', 'text/plain; charset=uft-8');
          resp.end('404 not found');
          break;
        }
      }
    default:
      break;
  }
};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
